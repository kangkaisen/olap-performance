---
title: RPC 优化点
icon: creative
---

## Local exchange pass through

## 线程模型的设计

### 全 polling 线程模型

### brpc 线程模型

## 内存管理

## 连接管理

## 池化

## Batch 操作

## 用户态 TCP

## Cache Miss 优化

避免跨线程访问资源，保证 cache locally

## 序列化

ProtoBuf

FlatBuffers

## 压缩和编码

## Zero Copy

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*9BzxNcdOAGP1FmhOb2PSXQ.png)

Linux sendfile:

```
ssize_t sendfile(
  int out_fd,
  int in_fd,
  off_t *offset,
  size_t count
  );
```

[高速网络的未来：解析零拷贝Zero-Copy架构](https://mp.weixin.qq.com/s/hfv2-W7IZ9LPcS4BYcFA4g)


## 流量控制

## RDMA

## DPDK

## 参考资料

<https://www.youtube.com/watch?v=A7PA37fxfp0&t=1981s>

<https://www.youtube.com/watch?v=fBpJNrSlQm8&t=1206s>
