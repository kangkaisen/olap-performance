---
title: 查询优化器优化点
icon: creative
---

## Parser 优化

## Nullable 优化

## 元数据优化

### In Memory MetaData

### 利用元数据加速查询

### 利用元数据改写查询

## 分区分桶裁剪

## 常见的RBO 优化

### 各种表达式的重写和化简

#### Cast 消除

#### 谓词化简

#### 公共谓词提取

### 列裁剪

### 谓词下推

### 等价谓词推导（常量传播）

### Outer Join 转 Inner Join

### Limit Merge

### Limit 下推

### 聚合 Merge

### Intersect Reorder

### 常量折叠

### 公共表达式复用

### 子查询改写

### Lateral Join 化简

### Empty Node 优化

### Empty Union, Intersect, Except 裁剪

## 常见的 CBO 优化

### 多阶段聚合优化

### Join 左右表 Reorder

### Join 多表 Reorder

### Join 分布式执行选择

#### Shuffle Join

#### Broadcast Join

#### Bucket Shuffle Join

#### Colocate Join

#### Replication Join

### CTE 复用

### Agg 下推 Join

### Agg 下推 GroupingSets

### 物化视图选择与改写

## 统计信息

### 统计信息的收集方式

### 统计信息的收集频率

### 统计信息 Cache

