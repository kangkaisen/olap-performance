---
title: 业务侧优化
icon: creative
---


## 数据建模

### 将被高频过滤的列作为分区，分桶列，进行分区分桶裁剪

可以通过 Explain 确认分区分桶裁剪是否生效

### 将高基数列作为分桶列，避免数据倾斜

### 将经常过滤的列作为 Sort Key

### 将经常 Group By 的列作为 Sort Key

### 将经常 Join 的列作为 Sort Key

### 如果数据没有 Null, 可以指定 Not Null 属性

### 尽量用数字列代替字符串列

## 如何加速 Scan

- 选择合理的数据模型
- 添加必要的物化视图
- 添加必要的索引
- Tablet 的 Version 越少 Scan 越快
- 尽可能让分区分桶裁剪生效
- 尽可能让 Scan 的谓词下推到存储层

## 如何加速聚合

- Group By 的列越少越快
- 尽可能用数字列代替 String 列
- 使用 Not-Nullable 的列代替 Nullable 的列

## 如何加速 Join

- 考虑使用 Hint 固定 Join 左右表的顺序，让小表在右边
- 考虑使用 Hint 指定 Join 是 Shuffle 还是 Broadcast
- 使用 Colocate Join 避免网络传输
- 尽量利用 Runtime Filter

## SQL 改写

### 减少不必要的 Join

## 近似代替精确

## 抽样代替全量



