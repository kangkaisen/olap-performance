---
title: 查询优化器
icon: creative
---

查询优化器的核心任务是生成一个 “最佳的”（执行 Cost 最低）的分布式物理执行计划，查询的数据量越大，查询的 SQL 越复杂，查询优化器的意义越大，因为不同的物化执行计划，执行时间可能相差成千上万倍。 查询优化器就像军队的元帅，一旦决策错了，底下的将军和士兵战斗力再强也注定失败。 **所以一个 OLAP 数据想要在复杂查询下实现高性能，必须拥有一个成熟，高效的优化器。** 正是因为查询优化器如此重要，StarRocks 选择了从零自研一个 CBO 优化器，StarRocks 的优化器主要基于 Cascades 和 ORCA 论文实现，并结合 StarRocks 执行器和调度器进行了深度定制，优化和创新。完整支持了 TPC-DS 99 条SQL，实现了公共表达式复用，相关子查询重写，Lateral Join， CTE 复用，Join Rorder，Join 分布式执行策略选择，Global Runtime Filter 下推，低基数字典优化等重要功能和优化。

![optimizer-flow](/optimizer-flow.png)

从 SQL 文本到分布式物理执行计划, 在 StarRocks 中，一般经过以下几个步骤:

1. SQL Parse： 将SQL 文本转换成一个 AST(抽象语法树)
2. SQL Analyze：基于 AST 进行语法和语义分析
3. SQL Logical Plan： 将 AST 转换成逻辑计划
4. SQL Optimize：基于关系代数，统计信息，Cost 模型对逻辑计划进行重写，转换，选择出 Cost “最低” 的物理执行计划
5. 生成 Plan Fragment：将 Optimizer 选择的物理执行计划 转换为 BE 可以直接执行的 Plan Fragment。

## SQL Parser

- 输入：SQL 文本
- 输出：AST

## SQL Analyzer

- 输入：AST
- 输出：Annotated AST

SQL Analyzer 主要做下面几件事情：

- 检查并绑定 Database, Table, Column 等元信息
- SQL 的合法性检查
- Table 和 Column 的别名处理
- 函数参数的合法性检测
- 类型检查，类型转换

## SQL Planner

- 输入：Annotated AST
- 输出：Logical Plan

## SQL Optimizer

- 输入：Logical  Plan
- 输出：**Cost 最小的**  分布式物理执行计划

![sql-optimizer](/sql-optimizer.png)

## CBO查询优化器的框架

![optimizer-architecture](/optimizer-architecture.png)

### 统计信息类型

表粒度统计信息：行数，bytes size

列统计信息：Max, Min，null 比例，distinct count, avg row size
