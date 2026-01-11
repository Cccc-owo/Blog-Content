---
title: 离散数学笔记
tags:
  - "离散数学"
category: "学习"
description: "一些离散数学笔记"
published: 2025-06-20
updated: 2025-06-20
---

## 命题逻辑

### 命题与真值

命题：能表达判断且有唯一真值的陈述句。  
命题的真值: 判断的结果，只取两个值，真(T或1)或者假(F或0)。  
真命题: 真值为真的命题。  
假命题: 真值为假的命题。  

判断语句是否是命题：

1. 陈述句
2. 真值唯一: 去除悖论以及可真可假的陈述句。  

![图1](/images/posts/discrete_math/image.png)

### 命题的符号化

1. 命题标识符  
用小写英文字母 $p, q, r, … ,p_i,q_i,r_i (i≥1)$表示。  
例如 $p$ : 今天是周末。

2. 真值表示方法  
真: $T$ 或 $1$, 假: $F$ 或 $0$

3. 命题常量：表示确定命题的命题标识符  
命题变元：仅表示任意命题位置标志的命题标识符

4. 原子变元：当命题变元表示原子命题时，该变元称为原子变元

命题变元可以表示任意的命题，其真值不确定，故命题变元不是命题。当命题变元 $p$ 用特定的命题取代时，$p$ 才能确定真值，称为对 $p$ 进行指派或赋值。

### 联结词

- 否定                $\neg$
- 合取                $\wedge$
- 析取                $\vee$
- 蕴含（或条件）      $\rightarrow$
- 等价（或双条件）    $\leftrightarrow$

「或」的两种表示方法：  

1. 根据题意，若「$p$ 或 $q$」为真， $p$ 和 $q$ 可以单个为真, 也可以同时为真，则为「相容或」（也称为「可兼或」），符号化为 $p \vee q$
2. 根据题意，若「$p$ 或 $q$」为真， $p$ 和 $q$ 可以单个为真, 但不能同时为真，则为「排斥或」（也称为「排斥或」），符号化为 $(p \wedge \neg q) \vee (\neg p \wedge q)$ 或者 $(p \vee q) \wedge \neg (p \wedge q)$

$p \rightarrow q$ 的逻辑关系：$q$ 为 $p$ 的必要条件, $p$ 是 $q$ 的充分条件

「如果 $p$, 则 $q$」的不同表述方式：

- 若 $p$, 就 $q$  
- 只要 $p$, 就 $q$  
- $p$ 仅当 $q$  
- 只有 $q$ 才 $p$  
- 除非 $q$, 才 $p$  
- 除非 $q$, 否则非 $p$  

又：$p \rightarrow q$ 与 $\neg q \rightarrow \neg p$ 等值（常用）

真值表：

| $p$ | $q$ | $\neg p$ | $p\wedge q$ | $p\vee q$ | $p\rightarrow q$ | $p\leftrightarrow q$ |
| :-: | :-: | :------: | :--------: | :-------: | :--------------: | :------------------: |
| 1   | 1   | 0        | 1          | 1         | 1                | 1                    |
| 1   | 0   | 0        | 0          | 1         | 0                | 0                    |
| 0   | 1   | 1        | 0          | 1         | 1                | 0                    |
| 0   | 0   | 1        | 0          | 0         | 1                | 1                    |

联结词的优先顺序为：$\neg,\ \wedge,\ \vee,\ \rightarrow,\ \leftrightarrow$。如果出现的联结词同级，又无括号时，则按从左到右的顺序运算; 若遇有括号时，应该先进行括号中的运算。

![图2](/images/posts/discrete_math/image-1.png)

### 命题变项

命题常项/常元：简单命题  
命题变项/变元：真值不确定的陈述句  

### 合式公式

**定义**  
合式公式（命题公式, 公式）递归定义如下：

1. 单个命题常项或变项 $p,q,r,\cdots,p_i ,q_i ,r_i ,\cdots$ 是合式公式
2. 若A是合式公式，则 ($\neg A$)也是合式公式
3. 若A, B是合式公式，则($A \wedge B$), ($A \vee B$), ($A \rightarrow B$), ($A \leftrightarrow B$)也是合式公式
4. 只有有限次地应用(1)~(3)形成的符号串才是合式公式

合式公式不是命题，只有命题变元用确定命题代入时合式公式才是命题。

![图3](/images/posts/discrete_math/image-2.png)

### 命题公式的赋值

用命题常项替换公式 $A$ 中的同一命题变项，称为解释。  

**定义**  
给公式 $A$ 中的所有命题变元 $p_1, p_2, \cdots , p_n$ 指定一组真值，称为对 $A$ 的一个赋值或解释。  
成真赋值: 使公式为真的赋值  
成假赋值: 使公式为假的赋值  

例如，公式$\neg p \vee(q \rightarrow r)$  
$010, 011$ 都是成真赋值，$110$ 是成假赋值

含$n$个变项的公式有 $2^n$ 个赋值，由 $n$ 个命题变元确定的真值表个数为 $2^{2^n}$

例 写出公式 $A=(q\rightarrow p)\wedge q\rightarrow p$ 的真值表

| p | q | $q\rightarrow p$ | $(q\rightarrow p)\wedge q$ | $(q\rightarrow p)\wedge q\rightarrow p$ |
|---|---|------------------|---------------------------|---------------------------------------|
| 0 | 0 | 1                | 0                         | 1                                     |
| 0 | 1 | 0                | 0                         | 1                                     |
| 1 | 0 | 1                | 0                         | 1                                     |
| 1 | 1 | 1                | 1                         | 1                                     |

### 命题公式的分类

**定义**  
设 $A$ 为一个命题公式  

1. 若 $A$ 在各种赋值下取值均为 $1$, 则称 $A$ 为重言式（永真式）  
2. 若 $A$ 在各种赋值下取值均为 $0$, 则称 $A$ 为矛盾式（永假式）  
3. 若 $A$ 不是矛盾式，则称 $A$ 为可满足式  

说明：

1. 重言式是可满足式，但反之不真
2. 可满足式的等价定义是：$A$ 至少存在一个成真赋值
3. 可用真值表判断公式类型，求其成真（假）赋值

关于重言式的两个结论  

1. 任何两个重言式的合取或析取，仍然是一个重言式。
2. 一个重言式，对同一分量都用任何合式公式置换，其结果仍为一重言式。

例如 $q \vee \neg q$  
     $((p \vee s)\wedge r)\vee \neg ((p \vee s)\wedge r)$

### 真值函数

**定义**  
称定义域为 $\{00 \dots 0, 00 \dots 1, \cdots, 11 \dots 1\}$，值域
为 $\{0, 1\}$的函数是 $n$ 元真值函数，定义域中的元素是长为 $n$ 的 $0,1$ 串。常用 $F:\{0, 1\}^n \rightarrow \{0, 1\}$ 表示 $F$ 是 $n$ 元真值函数。

共有 $2^{2^n}$ 个 $n$ 元真值函数

例如 $F:\{0, 1\}^2 \rightarrow \{0, 1\}$，且 $F(00)=F(01)=F(11)=0, F(10)=1$，则 $F$ 为一个确定的 $2$ 元真值函数  

### 等值式

**定义**  
若等价式 $A \rightarrow B$ 是重言式，则称 $A$ 与 $B$ 等值，记作 $A \Leftrightarrow B$，并称 $A \Leftrightarrow B$ 是等值式

基本等值式：

| 定律名称          | 逻辑表达式                                                               | 序号 |
|-------------------|------------------------------------------------------------------------|------|
| 双重否定         | $\neg\neg A \Leftrightarrow A$                                         | 1    |
| 幂等律           | $A \vee A \Leftrightarrow A$, $A \wedge A \Leftrightarrow A$            | 2    |
| 交换律           | $A \vee B \Leftrightarrow B \vee A$, $A \wedge B \Leftrightarrow B \wedge A$ | 3    |
| 结合律           | $(A \vee B) \vee C \Leftrightarrow A \vee (B \vee C)$                   | 4    |
| 分配律           | $A \vee (B \wedge C) \Leftrightarrow (A \vee B) \wedge (A \vee C)$     | 5    |
| 吸收律           | $A \vee (A \wedge B) \Leftrightarrow A$, $A \wedge (A \vee B) \Leftrightarrow A$ | 6    |
| 德·摩根律        | $\neg(A \lor B) \Leftrightarrow \neg A \wedge \neg B$, $\neg(A \wedge B) \Leftrightarrow \neg A \vee \neg B$ | 7    |
| 零律             | $A \wedge 0 \Leftrightarrow 0$, $A \vee 1 \Leftrightarrow 1$           | 8    |
| 同一律           | $A \vee 0 \Leftrightarrow A$, $A \wedge 1 \Leftrightarrow A$           | 9    |
| 排中律           | $A \vee \neg A \Leftrightarrow 1$                                     | 10   |
| 矛盾律           | $A \wedge \neg A \Leftrightarrow 0$                                    | 11   |
| 蕴含等值式       | $A \rightarrow B \Leftrightarrow \neg A \vee B$                       | 12   |
| 等价等值式       | $A \leftrightarrow B \Leftrightarrow (A \to B) \wedge (B \to A)$ <br> $\Leftrightarrow (A \wedge B) \vee (\neg A \wedge \neg B)$ <br> $\neg (A \leftrightarrow B) \Leftrightarrow (A \wedge \neg B) \vee (\neg A \wedge B)$ <br> $\Leftrightarrow A \leftrightarrow \neg B$ | 13   |
| 假言易位         | $A \to B \Leftrightarrow \neg B \to \neg A$                           | 14   |
| 等价否定等值式   | $A \leftrightarrow B \Leftrightarrow \neg A \leftrightarrow \neg B$   | 15   |
| 归谬论           | $(A \to B) \wedge (A \to \neg B) \Leftrightarrow \neg A$               | 16   |

### 等值演算

等价演算：由已知的等值式推演出新等值式的过程

置换规则：若 $A \Leftrightarrow B$, 则 $\Phi(A) \Leftrightarrow \Phi(B)$，其中 $\Phi(A)$ 是含有公式 $A$ 的合式公式, $\Phi(B)$ 是用公式 $B$ 置换 $\Phi(A)$ 中的 $A$ 得到的合式公式

等值演算的基础：

1. 等值关系的性质：自反性、传递性、对称性
2. 基本等值式
3. 置换规则

如何证明不等值：用等值演算不能直接证明两个公式不等价，证明两个公式不等价的基本思想是找到某赋值使一个成真，另一个成假

方法一   真值表法  
方法二   观察赋值法  
方法三   用等值演算先化简两个公式，再观察  

### 析取范式与合取范式

**文字**  
命题变项及其否定的总称

**简单析取式**  
有限个文字构成的析取式  
如 $p, \neg q, p \vee \neg q, p \vee q \vee r, \cdots$

**简单合取式**  
有限个文字构成的合取式  
如 $p, \neg q, p \wedge \neg q, p \wedge q \wedge r, \cdots$

**析取范式**  
由有限个简单合取式组成的析取式  
$A_{1} \vee A_{2} \vee \ldots \vee A_{r}$，  
其中 $A_{1}$，$A_{2}$，$\ldots$，$A_{r}$ 是简单合取式

**合取范式**  
由有限个简单析取式组成的合取式  
$A_{1} \wedge A_{2} \wedge \ldots \wedge A_{r}$，  
其中 $A_{1}$，$A_{2}$，$\ldots$，$A_{r}$ 是简单析取式

定理  任何命题公式都存在着与之等值的析取范式与合取范式

求公式A的范式的步骤：

1. 消去A中的 $\rightarrow, \leftrightarrow$（若存在）
2. 否定联结词 $\vee$ 的内移（德摩根律）或消去（双重否定）
3. 使用分配律——$\wedge$对$\vee$分配（析取范式）；$\vee$对$\wedge$分配（合取范式）

注意：公式的范式存在，但不惟一

例 求下列公式的析取范式与合取范式

$(p\rightarrow\neg q)\vee\neg r$

解 $(p\rightarrow\neg q)\vee\neg r$  
$\Leftrightarrow$ $(\neg p\vee\neg q)\vee\neg r$ （消去$\rightarrow$）  
$\Leftrightarrow$ $\neg p\vee\neg q\vee\neg r$ （结合律）

这既是 $A$ 的析取范式（由3个简单合取式组成的析取式），又是 $A$ 的合取范式（由一个简单析取式组成的合取式）

### 极小项与极大项

**定义**  
在含有n个命题变项的简单合取式（简单析取式）中，若每个命题变项均以文字的形式出现且仅出现一次，称这样的简单合取式（简单析取式）为极小项（极大项）

**说明：**

- $n$ 个命题变项产生 $2^{n}$ 个极小项和 $2^{n}$ 个极大项
- $2^{n}$ 个极小项（极大项）均互不等值
- 在极小项和极大项中文字均按下标或字母顺序排列
- 用 $m_{i}$ 表示第 $i$ 个极小项，其中 $i$ 是该极小项成真赋值的十进制表示。用 $M_{i}$ 表示第 $i$ 个极大项，其中 $i$ 是该极大项成假赋值的十进制表示，$m_{i}$($M_{i}$) 称为极小项（极大项）的名称。
- $m_{i}$ 与 $M_{i}$ 的关系：$\neg m_{i}\Leftrightarrow M_{i}$，$\neg M_{i}\Leftrightarrow m_{i}$

由 $p, q$ 两个命题变项形成的极小项与极大项：

| | 极小项 | | | 极大项 | |
|--------|---|---|--------|---|---|
| 公式 | 成真赋值 | 名称 | 公式 | 成假赋值 | 名称 |
| $\neg p \wedge \neg q$ | 0 0 | $m_{0}$ | $p \vee q$ | 0 0 | $M_{0}$ |
| $\neg p \wedge q$ | 0 1 | $m_{1}$ | $p \vee \neg q$ | 0 1 | $M_{1}$ |
| $p \wedge \neg q$ | 1 0 | $m_{2}$ | $\neg p \vee q$ | 1 0 | $M_{2}$ |
| $p \wedge q$ | 1 1 | $m_{3}$ | $\neg p \vee \neg q$ | 1 1 | $M_{3}$ |

### 主析取范式与主合取范式

**定义**  
主析取范式: 由成真赋值对应的极小项构成的析取范式  
主合取范式: 由成假赋值对应的极大项构成的合取范式  

**例如**，$n=3$，命题变项为$p$，$q$，$r$时，

$(\neg p\wedge\neg q\wedge r)\vee(\neg p\wedge q\wedge r) \Leftrightarrow m_{1}\vee m_{3}$ 是主析取范式

$(p\vee q\vee\neg r)\wedge(\neg p\vee q\vee\neg r) \Leftrightarrow M_{1}\wedge M_{5}$ 是主合取范式

**A的主析取范式**：与 $A$ 等值的主析取范式

**A的主合取范式**：与 $A$ 等值的主合取范式

**定理**  
任何命题公式都存在着与之等值的主析取范式和主合取范式, 并且是唯一的

用等值演算法求公式的主范式的步骤：

1. 先求析取范式（合取范式）
2. 将不是极小项（极大项）的简单合取式（简单析取式）化成与之等值的若干个极小项的析取（极大项的合取），需要利用同一律（零律）、排中律（矛盾律）、分配律、幂等律等
3. 极小项（极大项）用名称 $m_i(M_i)$ 表示，并按角标从小到大顺序排序

#### 用途

##### 求公式的成真赋值和成假赋值

例如 $(p\rightarrow\neg q)\rightarrow r \Leftrightarrow m_{1}\vee m_{3}\vee m_{5}\vee m_{6}\vee m_{7}$，

其成真赋值为 $001, 011, 101, 110, 111$

其余的赋值 $000, 010, 100$ 为成假赋值

**注意**：

- 由主合取范式也可立即求出成假赋值和成真赋值
- 真值表和主范式可互相确定

##### 判断公式的类型

设$A$含$n$个命题变项，则：

$A$为重言式  
$\Leftrightarrow A$的主析取范式含 $2^{n}$ 个极小项  
$\Leftrightarrow A$的主合取范式为 $1$  

$A$为矛盾式  
$\Leftrightarrow A$的主析取范式为 $0$  
$\Leftrightarrow A$的主合取范式含 $2^{n}$ 个极大项  

$A$为非重言式的可满足式  
$\Leftrightarrow A$的主析取范式中至少含一个且不含全部极小项  
$\Leftrightarrow A$的主合取范式中至少含一个且不含全部极大项  

##### 判断两个公式是否等值

例 用主析取范式判断下述两个公式是否等值：

(1) $p\rightarrow(q\rightarrow r)$ 与 $(p\wedge q)\rightarrow r$

(2) $p\rightarrow(q\rightarrow r)$ 与 $(p\rightarrow q)\rightarrow r$

解 $p\rightarrow(q\rightarrow r)\Leftrightarrow m_{0}\vee m_{1}\vee m_{2}\vee m_{3}\vee m_{4}\vee m_{5}\vee m_{7}$

$(p\wedge q)\rightarrow r\Leftrightarrow m_{0}\vee m_{1}\vee m_{2}\vee m_{3}\vee m_{4}\vee m_{5}\vee m_{7}$

$(p\rightarrow q)\rightarrow r\Leftrightarrow m_{1}\vee m_{3}\vee m_{4}\vee m_{5}\vee m_{7}$

故(1)中的两公式等值，而(2)的不等值

<!-- Q.E.D. -->