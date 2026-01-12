---
title: 概率统计学习之笔记
published: 2026-01-12

description: "一些概统笔记，复习用"
updated: 2026-01-12

tags:
  - "概率统计"
  - "复习"
category: 学习

draft: false
---

> **参考教材**：《概率论与数理统计》第五版 (浙江大学 盛骤等编)

---

## 第一章 概率论的基本概念

### §1 随机试验

**定义**：我们将具有下列三个特点的试验称为**随机试验**，简称**试验**，并以 $E$ 表示：

1. **$1^{\circ}$** 可以在相同的条件下重复地进行；
2. **$2^{\circ}$** 每次试验的可能结果不止一个，并且能事先明确试验的所有可能结果；
3. **$3^{\circ}$** 进行一次试验之前不能确定哪一个结果会出现。

### §2 样本空间、随机事件

**定义**：对于随机试验， $E$ 的所有可能结果组成的集合称为 $E$ 的**样本空间**，记为 $S$ 。样本空间的元素，即 $E$ 的每个结果，称为**样本点**。

**定义**：一般，我们称试验 $E$ 的样本空间 $S$ 的子集为 $E$ 的**随机事件**，简称**事件**。

* **基本事件**：由一个样本点组成的单点集。
* **必然事件 ($S$)**：在每次试验中它总是发生的。
* **不可能事件 ($\emptyset$)**：空集 $\emptyset$ 不包含任何样本点，它在每次试验中都不发生。

**事件的关系与运算**：

1. **包含**：若 $A$ 发生必然导致 $B$ 发生，记为 $A \subset B$ 。
2. **相等**：若 $A \subset B$ 且 $B \subset A$ ，记为 $A = B$ 。
3. **和事件**： $A \cup B = \{x | x \in A \text{ 或 } x \in B\}$ 。
4. **积事件**： $A \cap B = \{x | x \in A \text{ 且 } x \in B\}$ （常记为 $AB$ ）。
5. **差事件**： $A - B = \{x | x \in A \text{ 且 } x \notin B\}$ 。
6. **互不相容**：若 $AB = \emptyset$ ，称 $A$ 与 $B$ 互不相容（或互斥）。
7. **对立事件（逆事件）**：若 $A \cup B = S$ 且 $AB = \emptyset$ ，称 $A$ 与 $B$ 互为对立事件， $B$ 记为 $\bar{A}$ 。

**运算律 (德摩根律 / De Morgan's Laws)**：
$$ \overline{A \cup B} = \bar{A} \cap \bar{B}, \quad \overline{A \cap B} = \bar{A} \cup \bar{B} $$

### §3 频率与概率

**定义**（频率）：在相同的条件下，进行了 $n$ 次试验，在这 $n$ 次试验中，事件 $A$ 发生的次数 $n_A$ 称为事件 $A$ 发生的**频数**。比值 $n_A/n$ 称为事件 $A$ 发生的**频率**，并记成 $f_n(A)$ 。

* **性质**：
    1. $0 \le f_n(A) \le 1$
    2. $f_n(S) = 1$
    3. 若 $A_1, \cdots, A_k$ 互不相容，则 $f_n(\cup A_i) = \sum f_n(A_i)$

**定义**（概率的公理化定义）：设 $E$ 是随机试验， $S$ 是它的样本空间。对于 $E$ 的每一事件 $A$ 赋予一个实数 $P(A)$ ，称为事件 $A$ 的**概率**，如果集合函数 $P(\cdot)$ 满足下列条件：

1. **非负性**：对于每一个事件 $A$ ，有 $P(A) \ge 0$ 。
2. **规范性**：对于必然事件 $S$ ，有 $P(S) = 1$ 。
3. **可列可加性**：设 $A_1, A_2, \cdots$ 是两两互不相容的事件，即对于 $A_i A_j = \emptyset, i \ne j, i,j=1,2,\cdots$ ，有
    $$ P(A_1 \cup A_2 \cup \cdots) = P(A_1) + P(A_2) + \cdots $$

**性质**：

* **性质 1**： $P(\emptyset) = 0$ 。
* **性质 2 (有限可加性)**：若 $A_1, A_2, \cdots, A_n$ 是两两互不相容的事件，则
    $$ P(A_1 \cup A_2 \cup \cdots \cup A_n) = P(A_1) + P(A_2) + \cdots + P(A_n) $$
* **性质 3**：设 $A, B$ 是两个事件，若 $A \subset B$ ，则
    $$ P(B-A) = P(B) - P(A) $$
    $$ P(B) \ge P(A) $$
* **性质 4**：对于任一事件 $A$ ， $P(A) \le 1$ 。
* **性质 5 (逆事件的概率)**：对于任一事件 $A$ ，有 $P(\bar{A}) = 1 - P(A)$ 。
* **性质 6 (加法公式)**：对于任意两事件 $A, B$ ，有
    $$ P(A \cup B) = P(A) + P(B) - P(AB) $$
    *推广（三事件）*：
    $$ P(A \cup B \cup C) = P(A)+P(B)+P(C)-P(AB)-P(AC)-P(BC)+P(ABC) $$

### §4 等可能概型（古典概型）

**定义**：具有以下两个特点的试验称为**等可能概型**，也称为**古典概型**：

1. **$1^{\circ}$** 试验的样本空间只包含有限个元素；
2. **$2^{\circ}$** 试验中每个基本事件发生的可能性相同。

**公式**：设试验的样本空间为 $S = \{e_1, e_2, \cdots, e_n\}$ 。若事件 $A$ 包含 $k$ 个基本事件，即 $A = \{e_{i_1}\} \cup \cdots \cup \{e_{i_k}\}$ ，则
$$ P(A) = \frac{k}{n} = \frac{A \text{包含的基本事件数}}{S \text{中基本事件的总数}} $$

**超几何分布公式**：
设有 $N$ 件产品，其中有 $D$ 件次品，今从中任取 $n$ 件，则其中恰有 $k$ 件次品的概率为：
$$ p = \frac{\binom{D}{k}\binom{N-D}{n-k}}{\binom{N}{n}} \quad (k \le D, n-k \le N-D) $$

### §5 条件概率

**定义**：设 $A, B$ 是两个事件，且 $P(A)>0$ ，称
$$ P(B|A) = \frac{P(AB)}{P(A)} $$
为在事件 $A$ 发生的条件下事件 $B$ 发生的**条件概率**。

**定理 (乘法定理)**：
设 $P(A)>0$ ，则有
$$ P(AB) = P(B|A)P(A) $$
推广：设 $A_1, A_2, \cdots, A_n$ 为 $n$ 个事件， $n \ge 2$ ，且 $P(A_1 A_2 \cdots A_{n-1}) > 0$ ，则有
$$ P(A_1 A_2 \cdots A_n) = P(A_1)P(A_2|A_1)P(A_3|A_1 A_2)\cdots P(A_n|A_1 A_2 \cdots A_{n-1}) $$

**定理 (全概率公式)**：
设试验 $E$ 的样本空间为 $S$ ， $A$ 为 $E$ 的事件， $B_1, B_2, \cdots, B_n$ 为 $S$ 的一个划分，且 $P(B_i)>0 (i=1,2,\cdots,n)$ ，则
$$ P(A) = P(A|B_1)P(B_1) + P(A|B_2)P(B_2) + \cdots + P(A|B_n)P(B_n) = \sum_{i=1}^n P(B_i)P(A|B_i) $$

**定理 (贝叶斯公式)**：
设试验 $E$ 的样本空间为 $S$ ， $A$ 为 $E$ 的事件， $B_1, B_2, \cdots, B_n$ 为 $S$ 的一个划分，且 $P(A)>0, P(B_i)>0 (i=1,2,\cdots,n)$ ，则
$$ P(B_i|A) = \frac{P(A|B_i)P(B_i)}{\sum_{j=1}^n P(A|B_j)P(B_j)}, \quad i=1,2,\cdots,n $$

### §6 独立性

**定义**：设 $A, B$ 是两事件，如果满足等式
$$ P(AB) = P(A)P(B) $$
则称事件 $A, B$ **相互独立**，简称 $A, B$ **独立**。

**定理 1**：设 $A, B$ 是两事件，且 $P(A)>0$ 。若 $A, B$ 相互独立，则 $P(B|A)=P(B)$ 。反之亦然。

**定理 2**：若事件 $A$ 与 $B$ 相互独立，则下列各对事件也相互独立：
$$ A \text{ 与 } \bar{B}, \quad \bar{A} \text{ 与 } B, \quad \bar{A} \text{ 与 } \bar{B} $$

**定义 (三个事件独立)**：设 $A, B, C$ 是三个事件，如果满足等式
$$ \begin{cases} P(AB) = P(A)P(B) \\ P(BC) = P(B)P(C) \\ P(AC) = P(A)P(C) \\ P(ABC) = P(A)P(B)P(C) \end{cases} $$
则称事件 $A, B, C$ **相互独立**。
*注：前三个等式仅保证两两独立，不足以保证相互独立。*

**定义 (n个事件独立)**：
一般，设 $A_1, A_2, \cdots, A_n$ 是 $n(n \ge 2)$ 个事件，如果对于其中任意 $k(2 \le k \le n)$ 个事件 $A_{i_1}, A_{i_2}, \cdots, A_{i_k}$ 的积事件的概率，都等于各事件概率的积，则称事件 $A_1, A_2, \cdots, A_n$ **相互独立**。

---

## 第二章 随机变量及其分布

### §1 随机变量

**定义**：设随机试验的样本空间为 $S=\{e\}$ 。 $X=X(e)$ 是定义在样本空间 $S$ 上的实值单值函数。称 $X=X(e)$ 为**随机变量**。

### §2 离散型随机变量及其分布律

**定义**：有些随机变量，它全部可能取到的值是有限个或可列无限多个，这种随机变量称为**离散型随机变量**。

**定义**：设离散型随机变量 $X$ 所有可能取的值为 $x_k (k=1,2,\cdots)$ ， $X$ 取各个可能值的概率，即事件 $\{X=x_k\}$ 的概率，为
$$ P\{X=x_k\} = p_k, \quad k=1,2,\cdots $$
由概率的定义， $p_k$ 满足如下两个条件：

1. **$1^{\circ}$** $p_k \ge 0, \quad k=1,2,\cdots$
2. **$2^{\circ}$** $\sum_{k=1}^{\infty} p_k = 1$
我们称上式为离散型随机变量 $X$ 的**分布律**。

**常见离散型分布**：

1. **(0-1) 分布**：
    随机变量 $X$ 只可能取 0 与 1 两个值，它的分布律是
    $$ P\{X=k\} = p^k(1-p)^{1-k}, \quad k=0,1 \quad (0<p<1) $$
    则称 $X$ 服从以 $p$ 为参数的 **(0-1) 分布**或**两点分布**。

2. **伯努利试验与二项分布**：
    * **伯努利试验**：设试验 $E$ 只有两个可能结果： $A$ 及 $\bar{A}$ ，则称 $E$ 为**伯努利试验**。设 $P(A)=p (0<p<1)$ ，此时 $P(\bar{A})=1-p$ 。
    * **$n$ 重伯努利试验**：将 $E$ 独立重复地进行 $n$ 次，则称这一串重复的独立试验为 **$n$ 重伯努利试验**。
    * **二项分布**：在 $n$ 重伯努利试验中，事件 $A$ 发生的次数 $X$ 的分布律为
        $$ P\{X=k\} = \binom{n}{k} p^k (1-p)^{n-k}, \quad k=0,1,\cdots,n $$
        称随机变量 $X$ 服从参数为 $n, p$ 的**二项分布**，记为 $X \sim b(n,p)$ 。

3. **泊松分布**：
    设随机变量 $X$ 所有可能取的值为 $0,1,2,\cdots$ ，而取各个值的概率为
    $$ P\{X=k\} = \frac{\lambda^k e^{-\lambda}}{k!}, \quad k=0,1,2,\cdots $$
    其中 $\lambda > 0$ 是常数。则称 $X$ 服从参数为 $\lambda$ 的**泊松分布**，记为 $X \sim \pi(\lambda)$ 。

**定理 (泊松定理)**：
设 $\lambda > 0$ 是一个常数， $n$ 是任意正整数，设 $np_n = \lambda$ ，则对于任一固定的非负整数 $k$ ，有
$$ \lim_{n \to \infty} \binom{n}{k} p_n^k (1-p_n)^{n-k} = \frac{\lambda^k e^{-\lambda}}{k!} $$
*(注：该定理表明当 $n$ 很大，$p$ 很小时，二项分布可用泊松分布近似)*

### §3 随机变量的分布函数

**定义**：设 $X$ 是一个随机变量， $x$ 是任意实数，函数
$$ F(x) = P\{X \le x\}, \quad -\infty < x < \infty $$
称为 $X$ 的**分布函数**。

**性质**：

1. **$1^{\circ}$** $F(x)$ 是一个不减函数。
2. **$2^{\circ}$** $0 \le F(x) \le 1$ ，且
    $$ F(-\infty) = \lim_{x\to -\infty} F(x) = 0, \quad F(\infty) = \lim_{x\to \infty} F(x) = 1 $$
3. **$3^{\circ}$** $F(x)$ 是**右连续**的，即 $F(x+0)=F(x)$ 。

**公式**：
对于任意实数 $x_1, x_2 (x_1 < x_2)$ ，有
$$ P\{x_1 < X \le x_2\} = P\{X \le x_2\} - P\{X \le x_1\} = F(x_2) - F(x_1) $$

### §4 连续型随机变量及其概率密度

**定义**：如果对于随机变量 $X$ 的分布函数 $F(x)$ ，存在非负函数 $f(x)$ ，使对于任意实数 $x$ 有
$$ F(x) = \int_{-\infty}^x f(t)dt $$
则称 $X$ 为**连续型随机变量**，其中函数 $f(x)$ 称为 $X$ 的**概率密度函数**，简称**概率密度**。

**性质**：

1. **$1^{\circ}$** $f(x) \ge 0$ 。
2. **$2^{\circ}$** $\int_{-\infty}^{\infty} f(x)dx = 1$ 。
3. **$3^{\circ}$** 对于任意实数 $x_1, x_2 (x_1 \le x_2)$ ，
    $$ P\{x_1 < X \le x_2\} = F(x_2) - F(x_1) = \int_{x_1}^{x_2} f(x)dx $$
4. **$4^{\circ}$** 若 $f(x)$ 在点 $x$ 处连续，则 $F'(x) = f(x)$ 。

**常见连续型分布**：

1. **均匀分布**：
    若连续型随机变量 $X$ 具有概率密度
    $$ f(x) = \begin{cases} \frac{1}{b-a}, & a < x < b \\ 0, & \text{其他} \end{cases} $$
    则称 $X$ 在区间 $(a,b)$ 上服从**均匀分布**，记为 $X \sim U(a,b)$ 。
    * 分布函数：
        $$ F(x) = \begin{cases} 0, & x < a \\ \frac{x-a}{b-a}, & a \le x < b \\ 1, & x \ge b \end{cases} $$

2. **指数分布**：
    若连续型随机变量 $X$ 的概率密度为
    $$ f(x) = \begin{cases} \frac{1}{\theta}e^{-x/\theta}, & x > 0 \\ 0, & \text{其他} \end{cases} $$
    其中 $\theta > 0$ 为常数，则称 $X$ 服从参数为 $\theta$ 的**指数分布**。
    *(注：部分教材或题目参数记为 $\lambda$，此时 $f(x) = \lambda e^{-\lambda x}$，需注意区别，本教材使用 $\theta$)*
    * **无记忆性**：对于任意 $s, t > 0$，有 $P\{X > s+t | X > s\} = P\{X > t\}$。

3. **正态分布**：
    若连续型随机变量 $X$ 的概率密度为
    $$ f(x) = \frac{1}{\sqrt{2\pi}\sigma} e^{-\frac{(x-\mu)^2}{2\sigma^2}}, \quad -\infty < x < \infty $$
    其中 $\mu, \sigma (\sigma > 0)$ 为常数，则称 $X$ 服从参数为 $\mu, \sigma$ 的**正态分布**或**高斯 (Gauss) 分布**，记为 $X \sim N(\mu, \sigma^2)$ 。
    * **性质**：曲线关于 $x=\mu$ 对称；在 $x=\mu$ 处取最大值 $\frac{1}{\sqrt{2\pi}\sigma}$ 。
    * **标准正态分布**：当 $\mu=0, \sigma=1$ 时，称 $X \sim N(0,1)$ 。其密度函数记为 $\varphi(x)$ ，分布函数记为 $\Phi(x)$ 。
        $$ \Phi(x) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^x e^{-t^2/2} dt $$
        性质： $\Phi(-x) = 1 - \Phi(x)$ 。
    * **标准化定理**：若 $X \sim N(\mu, \sigma^2)$ ，则 $Z = \frac{X-\mu}{\sigma} \sim N(0,1)$ 。
        $$ F(x) = P\{X \le x\} = \Phi\left(\frac{x-\mu}{\sigma}\right) $$

### §5 随机变量的函数的分布

**定理**：设随机变量 $X$ 具有概率密度 $f_X(x), -\infty < x < \infty$ 。设函数 $g(x)$ 处处可导且 $g'(x) > 0$ （或恒有 $g'(x) < 0$ ），则 $Y=g(X)$ 是连续型随机变量，其概率密度为
$$ f_Y(y) = \begin{cases} f_X[h(y)] \cdot |h'(y)|, & \alpha < y < \beta \\ 0, & \text{其他} \end{cases} $$
其中 $\alpha = \min\{g(-\infty), g(\infty)\}, \beta = \max\{g(-\infty), g(\infty)\}$ ， $h(y)$ 是 $g(x)$ 的反函数。

## 第三章 多维随机变量及其分布

### §1 二维随机变量

**定义**：一般，设 $E$ 是一个随机试验，它的样本空间是 $S=\{e\}$ ，设 $X=X(e)$ 和 $Y=Y(e)$ 是定义在 $S$ 上的随机变量，由它们构成的一个向量 $(X, Y)$ ，叫做**二维随机变量**或**二维随机向量**。

**定义 (联合分布函数)**：设 $(X,Y)$ 是二维随机变量，对于任意实数 $x, y$ ，二元函数
$$ F(x, y) = P\{(X \le x) \cap (Y \le y)\} \stackrel{\text{记成}}{=} P\{X \le x, Y \le y\} $$
称为二维随机变量 $(X,Y)$ 的**分布函数**，或称为随机变量 $X$ 和 $Y$ 的**联合分布函数**。

**性质**：

1. **$1^{\circ}$** $F(x,y)$ 是变量 $x$ 和 $y$ 的不减函数。
2. **$2^{\circ}$** $0 \le F(x,y) \le 1$ ，且
    $$ F(x, -\infty) = 0, \quad F(-\infty, y) = 0, \quad F(-\infty, -\infty) = 0, \quad F(\infty, \infty) = 1 $$
3. **$3^{\circ}$** $F(x,y)$ 关于 $x$ 右连续，关于 $y$ 也右连续。
4. **$4^{\circ}$** (矩形不等式) 对于任意 $(x_1, y_1), (x_2, y_2), x_1 < x_2, y_1 < y_2$ ，下述不等式成立：
    $$ P\{x_1 < X \le x_2, y_1 < Y \le y_2\} = F(x_2, y_2) - F(x_2, y_1) - F(x_1, y_2) + F(x_1, y_1) \ge 0 $$

**定义 (二维离散型随机变量)**：如果二维随机变量 $(X,Y)$ 全部可能取到的值是有限对或可列无限多对，则称 $(X,Y)$ 是**二维离散型随机变量**。
设 $(X,Y)$ 所有可能取的值为 $(x_i, y_j), i,j=1,2,\cdots$ ，记
$$ P\{X=x_i, Y=y_j\} = p_{ij}, \quad i,j=1,2,\cdots $$
由概率定义有 $p_{ij} \ge 0, \sum_{i=1}^{\infty}\sum_{j=1}^{\infty} p_{ij} = 1$ 。称此式为二维离散型随机变量 $(X,Y)$ 的**分布律**（或**联合分布律**）。

**定义 (二维连续型随机变量)**：对于二维随机变量 $(X,Y)$ 的分布函数 $F(x,y)$ ，如果存在非负函数 $f(x,y)$ 使对于任意 $x,y$ 有
$$ F(x,y) = \int_{-\infty}^y \int_{-\infty}^x f(u,v) du dv $$
则称 $(X,Y)$ 是**二维连续型随机变量**，函数 $f(x,y)$ 称为 $(X,Y)$ 的**概率密度**（或**联合概率密度**）。

**性质**：

1. **$1^{\circ}$** $f(x,y) \ge 0$ 。
2. **$2^{\circ}$** $\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f(x,y) dx dy = 1$ 。
3. **$3^{\circ}$** 设 $G$ 是 $xOy$ 平面上的区域，点 $(X,Y)$ 落在 $G$ 内的概率为
    $$ P\{(X,Y) \in G\} = \iint_{G} f(x,y) dx dy $$
4. **$4^{\circ}$** 若 $f(x,y)$ 在点 $(x,y)$ 连续，则 $\frac{\partial^2 F(x,y)}{\partial x \partial y} = f(x,y)$ 。

### §2 边缘分布

**定义**：二维随机变量 $(X,Y)$ 关于 $X$ 和关于 $Y$ 的**边缘分布函数**依次定义为
$$ F_X(x) = F(x, \infty) = \lim_{y \to \infty} F(x, y), \quad F_Y(y) = F(\infty, y) = \lim_{x \to \infty} F(x, y) $$

**离散型边缘分布律**：
$$ P\{X=x_i\} = \sum_{j=1}^{\infty} p_{ij} = p_{i\cdot}, \quad i=1,2,\cdots $$
$$ P\{Y=y_j\} = \sum_{i=1}^{\infty} p_{ij} = p_{\cdot j}, \quad j=1,2,\cdots $$

**连续型边缘概率密度**：
$$ f_X(x) = \int_{-\infty}^{\infty} f(x,y) dy $$
$$ f_Y(y) = \int_{-\infty}^{\infty} f(x,y) dx $$

### §3 条件分布

**定义 (离散型)**：设 $(X,Y)$ 是二维离散型随机变量，对于固定的 $j$ ，若 $P\{Y=y_j\} > 0$ ，则称
$$ P\{X=x_i | Y=y_j\} = \frac{P\{X=x_i, Y=y_j\}}{P\{Y=y_j\}} = \frac{p_{ij}}{p_{\cdot j}}, \quad i=1,2,\cdots $$
为在 $Y=y_j$ 条件下随机变量 $X$ 的**条件分布律**。

**定义 (连续型)**：设二维随机变量 $(X,Y)$ 的概率密度为 $f(x,y)$ ， $(X,Y)$ 关于 $Y$ 的边缘概率密度为 $f_Y(y)$ 。若对于固定的 $y$ ， $f_Y(y) > 0$ ，则称 $\frac{f(x,y)}{f_Y(y)}$ 为在 $Y=y$ 的条件下 $X$ 的**条件概率密度**，记为
$$ f_{X|Y}(x|y) = \frac{f(x,y)}{f_Y(y)} $$
称 $\int_{-\infty}^x f_{X|Y}(u|y) du$ 为在 $Y=y$ 的条件下 $X$ 的**条件分布函数**，记为 $F_{X|Y}(x|y)$ 。

### §4 相互独立的随机变量

**定义**：设 $F(x,y)$ 及 $F_X(x), F_Y(y)$ 分别是二维随机变量 $(X,Y)$ 的分布函数及边缘分布函数。若对于所有 $x, y$ ，有
$$ P\{X \le x, Y \le y\} = P\{X \le x\}P\{Y \le y\} $$
即
$$ F(x,y) = F_X(x)F_Y(y) $$
则称随机变量 $X$ 和 $Y$ 是**相互独立**的。

**判定定理**：

1. **离散型**： $X, Y$ 相互独立 $\iff$ 对所有 $i, j$ ，有 $p_{ij} = p_{i\cdot} p_{\cdot j}$ 。
2. **连续型**： $X, Y$ 相互独立 $\iff$ $f(x,y) = f_X(x)f_Y(y)$ 在平面上几乎处处成立。
3. **二维正态分布**：若 $(X,Y) \sim N(\mu_1, \mu_2, \sigma_1^2, \sigma_2^2, \rho)$ ，则 $X$ 与 $Y$ 相互独立 $\iff \rho = 0$ （即不相关）。

### §5 两个随机变量的函数的分布

**定理 ($Z=X+Y$ 的分布 - 卷积公式)**：
设 $(X,Y)$ 是二维连续型随机变量，具有概率密度 $f(x,y)$ 。则 $Z=X+Y$ 仍为连续型随机变量，其概率密度为
$$ f_{X+Y}(z) = \int_{-\infty}^{\infty} f(x, z-x) dx = \int_{-\infty}^{\infty} f(z-y, y) dy $$
特别地，当 $X$ 和 $Y$ 相互独立时，有**卷积公式**：
$$ f_{X+Y}(z) = \int_{-\infty}^{\infty} f_X(x)f_Y(z-x) dx = \int_{-\infty}^{\infty} f_X(z-y)f_Y(y) dy $$

**$Z=Y/X$ 与 $Z=XY$ 的分布**：
设 $X, Y$ 相互独立，其概率密度分别为 $f_X(x), f_Y(y)$ 。

1. **商的分布** ($Z=Y/X$)：
    $$ f_{Y/X}(z) = \int_{-\infty}^{\infty} |x| f_X(x) f_Y(xz) dx $$
2. **积的分布** ($Z=XY$)：
    $$ f_{XY}(z) = \int_{-\infty}^{\infty} \frac{1}{|x|} f_X(x) f_Y\left(\frac{z}{x}\right) dx $$

**最大值与最小值的分布**：
设 $X_1, X_2, \cdots, X_n$ 是 $n$ 个**相互独立**的随机变量，它们的分布函数分别为 $F_{X_1}(x), \cdots, F_{X_n}(x)$ 。

1. **最大值** $M = \max\{X_1, \cdots, X_n\}$ 的分布函数：
    $$ F_{max}(z) = F_{X_1}(z) F_{X_2}(z) \cdots F_{X_n}(z) $$
    特别地，若 $X_i$ 独立同分布，分布函数均为 $F(x)$ ，则 $F_{max}(z) = [F(z)]^n$ 。
2. **最小值** $N = \min\{X_1, \cdots, X_n\}$ 的分布函数：
    $$ F_{min}(z) = 1 - [1-F_{X_1}(z)][1-F_{X_2}(z)] \cdots [1-F_{X_n}(z)] $$
    特别地，若 $X_i$ 独立同分布，分布函数均为 $F(x)$ ，则 $F_{min}(z) = 1 - [1-F(z)]^n$ 。

## 第四章 随机变量的数字特征

### §1 数学期望

**定义 (离散型)**：设离散型随机变量 $X$ 的分布律为 $P\{X=x_k\}=p_k, k=1,2,\cdots$ 。若级数 $\sum_{k=1}^{\infty} x_k p_k$ **绝对收敛**，则称级数 $\sum_{k=1}^{\infty} x_k p_k$ 的和为随机变量 $X$ 的**数学期望**，记为 $E(X)$ 。即
$$ E(X) = \sum_{k=1}^{\infty} x_k p_k $$

**定义 (连续型)**：设连续型随机变量 $X$ 的概率密度为 $f(x)$ ，若积分 $\int_{-\infty}^{\infty} xf(x)dx$ **绝对收敛**，则称积分 $\int_{-\infty}^{\infty} xf(x)dx$ 的值为随机变量 $X$ 的**数学期望**，记为 $E(X)$ 。即
$$ E(X) = \int_{-\infty}^{\infty} xf(x)dx $$

**定理 (随机变量函数的数学期望)**：
设 $Y$ 是随机变量 $X$ 的函数： $Y=g(X)$ （ $g$ 是连续函数）。

1. 如果 $X$ 是离散型随机变量，它的分布律为 $P\{X=x_k\}=p_k, k=1,2,\cdots$ ，若 $\sum_{k=1}^{\infty} g(x_k)p_k$ 绝对收敛，则有
    $$ E(Y) = E[g(X)] = \sum_{k=1}^{\infty} g(x_k)p_k $$
2. 如果 $X$ 是连续型随机变量，它的概率密度为 $f(x)$ ，若 $\int_{-\infty}^{\infty} g(x)f(x)dx$ 绝对收敛，则有
    $$ E(Y) = E[g(X)] = \int_{-\infty}^{\infty} g(x)f(x)dx $$

**二维随机变量函数的期望**：
设 $Z=g(X,Y)$ 。

1. 若 $(X,Y)$ 离散，分布律为 $p_{ij}$ ，则 $E(Z) = \sum_i \sum_j g(x_i, y_j) p_{ij}$ 。
2. 若 $(X,Y)$ 连续，密度为 $f(x,y)$ ，则 $E(Z) = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} g(x,y) f(x,y) dx dy$ 。

**性质 (数学期望的性质)**：

1. **$1^{\circ}$** 设 $C$ 是常数，则 $E(C) = C$ 。
2. **$2^{\circ}$** 设 $X$ 是一个随机变量， $C$ 是常数，则 $E(CX) = C E(X)$ 。
3. **$3^{\circ}$** 设 $X, Y$ 是两个随机变量，则 $E(X+Y) = E(X) + E(Y)$ 。
    *(注：该性质可推广到有限个随机变量之和)*
4. **$4^{\circ}$** 设 $X, Y$ 是**相互独立**的随机变量，则 $E(XY) = E(X)E(Y)$ 。
    *(注：该性质可推广到有限个相互独立的随机变量之积)*

### §2 方差

**定义**：设 $X$ 是随机变量，若 $E\{[X-E(X)]^2\}$ 存在，则称它为 $X$ 的**方差**，记为 $D(X)$ 或 $Var(X)$ ，即
$$ D(X) = E\{[X-E(X)]^2\} $$
在应用上还引入量 $\sqrt{D(X)}$ ，记为 $\sigma(X)$ ，称为**标准差**或**均方差**。

**方差计算公式**：
$$ D(X) = E(X^2) - [E(X)]^2 $$

**性质 (方差的性质)**：

1. **$1^{\circ}$** 设 $C$ 是常数，则 $D(C) = 0$ 。
2. **$2^{\circ}$** 设 $X$ 是随机变量， $C$ 是常数，则 $D(CX) = C^2 D(X)$ 。
    * $D(aX+b) = a^2 D(X)$
3. **$3^{\circ}$** 设 $X, Y$ 是**相互独立**的随机变量，则 $D(X+Y) = D(X) + D(Y)$ 。
    * 推广：若 $X_1, \dots, X_n$ 相互独立， $C_1, \dots, C_n$ 为常数，则 $D(\sum C_i X_i) = \sum C_i^2 D(X_i)$ 。
4. **$4^{\circ}$** $D(X) = 0$ 的充要条件是 $X$ 以概率 1 取常数 $E(X)$ ，即 $P\{X=E(X)\}=1$ 。

**定理 (切比雪夫不等式 / Chebyshev's Inequality)**：
设随机变量 $X$ 具有数学期望 $E(X)=\mu$ ，方差 $D(X)=\sigma^2$ ，则对于任意正数 $\varepsilon$ ，不等式
$$ P\{|X-\mu| \ge \varepsilon\} \le \frac{\sigma^2}{\varepsilon^2} $$
成立。

### §3 协方差及相关系数

**定义**：量 $E\{[X-E(X)][Y-E(Y)]\}$ 称为随机变量 $X$ 与 $Y$ 的**协方差**，记为 $Cov(X,Y)$ ，即
$$ Cov(X,Y) = E\{[X-E(X)][Y-E(Y)]\} $$

**协方差计算公式**：
$$ Cov(X,Y) = E(XY) - E(X)E(Y) $$

**协方差的性质**：

1. $Cov(X,Y) = Cov(Y,X)$
2. $Cov(aX, bY) = ab Cov(X,Y)$ （ $a, b$ 是常数）
3. $Cov(X_1+X_2, Y) = Cov(X_1, Y) + Cov(X_2, Y)$
4. $D(X+Y) = D(X) + D(Y) + 2Cov(X,Y)$

**定义**：
$$ \rho_{XY} = \frac{Cov(X,Y)}{\sqrt{D(X)}\sqrt{D(Y)}} $$
称为随机变量 $X$ 与 $Y$ 的**相关系数**。

**定理**：

1. $|\rho_{XY}| \le 1$ 。
2. $|\rho_{XY}| = 1$ 的充要条件是，存在常数 $a, b$ 使得 $P\{Y=aX+b\}=1$ 。即 $X$ 和 $Y$ 之间以概率 1 存在**线性关系**。

**定义 (不相关)**：
若 $\rho_{XY} = 0$ ，则称 $X$ 与 $Y$ **不相关**。

* **注**：不相关 $\iff Cov(X,Y)=0 \iff E(XY) = E(X)E(Y)$ 。
* **注**：相互独立 $\Rightarrow$ 不相关。反之不一定成立（对于正态分布，二者等价）。

### §4 矩、协方差矩阵

**定义**：
设 $X, Y$ 是随机变量。

1. 若 $E(X^k), k=1,2,\dots$ 存在，称它为 $X$ 的**k阶原点矩**，简称**k阶矩**。
2. 若 $E\{[X-E(X)]^k\}, k=1,2,\dots$ 存在，称它为 $X$ 的**k阶中心矩**。
3. 若 $E(X^k Y^l), k,l=1,2,\dots$ 存在，称它为 $X$ 和 $Y$ 的**k+l阶混合矩**。
4. 若 $E\{[X-E(X)]^k [Y-E(Y)]^l\}, k,l=1,2,\dots$ 存在，称它为 $X$ 和 $Y$ 的**k+l阶混合中心矩**。

**定义 (协方差矩阵)**：
将 $n$ 维随机变量 $(X_1, X_2, \cdots, X_n)$ 的二阶混合中心矩 $c_{ij} = Cov(X_i, X_j) = E\{[X_i-E(X_i)][X_j-E(X_j)]\}$ 排成矩阵的形式：
$$ \boldsymbol{C} = \begin{pmatrix} c_{11} & c_{12} & \cdots & c_{1n} \\ c_{21} & c_{22} & \cdots & c_{2n} \\ \vdots & \vdots & & \vdots \\ c_{n1} & c_{n2} & \cdots & c_{nn} \end{pmatrix} $$
这个矩阵称为随机变量 $(X_1, X_2, \cdots, X_n)$ 的**协方差矩阵**。

* **性质**：协方差矩阵是对称矩阵，即 $c_{ij} = c_{ji}$ 。

**n维正态随机变量的性质**：
$n$ 维正态随机变量 $(X_1, X_2, \cdots, X_n)$ 的概率密度由其数学期望向量 $\boldsymbol{\mu}$ 和协方差矩阵 $\boldsymbol{C}$ 唯一确定。
$n$ 维正态随机变量 $(X_1, \cdots, X_n)$ 相互独立 $\iff X_1, \cdots, X_n$ 两两不相关（即 $c_{ij}=0, i \ne j$ ）。

## 第五章 大数定律及中心极限定理

### §1 大数定律

**定义 (依概率收敛)**：
设 $Y_1, Y_2, \cdots, Y_n, \cdots$ 是一个随机变量序列， $a$ 是一个常数。若对于任意正数 $\varepsilon$ ，有
$$ \lim_{n \to \infty} P\{|Y_n - a| < \varepsilon\} = 1 $$
则称序列 $\{Y_n\}$ **依概率收敛**于 $a$ ，记为 $Y_n \xrightarrow{P} a$ 。

**定理 1 (切比雪夫大数定律 / Chebyshev's Law of Large Numbers)**：
设 $X_1, X_2, \cdots$ 是相互独立的随机变量序列，它们具有相同的数学期望 $E(X_k) = \mu$ 和方差 $D(X_k) = \sigma^2 (k=1,2,\cdots)$ 。作前 $n$ 个变量的算术平均 $\bar{X} = \frac{1}{n}\sum_{k=1}^n X_k$ ，则对于任意 $\varepsilon > 0$ ，有
$$ \lim_{n \to \infty} P\left\{ \left| \frac{1}{n}\sum_{k=1}^n X_k - \mu \right| < \varepsilon \right\} = 1 $$
即 $\bar{X}$ 依概率收敛于 $\mu$ 。

**切比雪夫大数定律的推广形式**：
设 $X_1, X_2, \cdots$ 是相互独立的随机变量序列，若它们的方差有一致上界（即存在常数 $C$ ，使得 $D(X_k) \le C$ 对一切 $k$ 成立），则序列 $\frac{1}{n}\sum_{k=1}^n X_k - \frac{1}{n}\sum_{k=1}^n E(X_k)$ 依概率收敛于 0 。

**定理 (伯努利大数定律 / Bernoulli's Law of Large Numbers)**：
设 $f_A$ 是 $n$ 次独立重复试验中事件 $A$ 发生的次数， $p$ 是事件 $A$ 在每次试验中发生的概率，则对于任意 $\varepsilon > 0$ ，有
$$ \lim_{n \to \infty} P\left\{ \left| \frac{f_A}{n} - p \right| < \varepsilon \right\} = 1 $$
即频率 $f_n(A)$ 依概率收敛于概率 $p$ 。

**定理 (辛钦大数定律 / Khinchin's Law of Large Numbers)**：
设 $X_1, X_2, \cdots$ 是相互独立、服从同一分布的随机变量序列，且具有数学期望 $E(X_k) = \mu (k=1,2,\cdots)$ 。作前 $n$ 个变量的算术平均 $\bar{X}_n = \frac{1}{n}\sum_{k=1}^n X_k$ ，则对于任意 $\varepsilon > 0$ ，有
$$ \lim_{n \to \infty} P\left\{ \left| \frac{1}{n}\sum_{k=1}^n X_k - \mu \right| < \varepsilon \right\} = 1 $$
即序列 $\bar{X}_n$ 依概率收敛于 $\mu$ 。

* **注**：辛钦大数定律不需要方差存在的条件，只需要独立同分布且期望存在。

### §2 中心极限定理

**定理 1 (独立同分布的中心极限定理 / 列维-林德伯格定理 / Lévy-Lindberg Theorem)**：
设随机变量 $X_1, X_2, \cdots, X_n, \cdots$ 相互独立，服从同一分布，且具有数学期望和方差： $E(X_k) = \mu, D(X_k) = \sigma^2 > 0 (k=1,2,\cdots)$ ，则随机变量之和 $\sum_{k=1}^n X_k$ 的标准化变量
$$ Y_n = \frac{\sum_{k=1}^n X_k - n\mu}{\sqrt{n}\sigma} $$
的分布函数 $F_n(x)$ 对于任意 $x$ 满足
$$ \lim_{n\to\infty} F_n(x) = \lim_{n\to\infty} P\left\{ \frac{\sum_{k=1}^n X_k - n\mu}{\sqrt{n}\sigma} \le x \right\} = \int_{-\infty}^x \frac{1}{\sqrt{2\pi}}e^{-t^2/2}dt = \Phi(x) $$
其中 $\Phi(x)$ 是标准正态分布的分布函数。

**近似计算公式**：
当 $n$ 充分大时， $\sum_{k=1}^n X_k$ 近似服从 $N(n\mu, n\sigma^2)$ 。
$$ P\left\{ a < \sum_{k=1}^n X_k \le b \right\} \approx \Phi\left(\frac{b - n\mu}{\sqrt{n}\sigma}\right) - \Phi\left(\frac{a - n\mu}{\sqrt{n}\sigma}\right) $$

**定理 2 (李雅普诺夫定理 / Lyapunov Theorem)**：
设随机变量 $X_1, X_2, \cdots, X_n, \cdots$ 相互独立，它们具有数学期望和方差： $E(X_k) = \mu_k, D(X_k) = \sigma_k^2 > 0$ 。记 $B_n^2 = \sum_{k=1}^n \sigma_k^2$ 。若存在正数 $\delta$ ，使得当 $n \to \infty$ 时，
$$ \frac{1}{B_n^{2+\delta}} \sum_{k=1}^n E\{|X_k - \mu_k|^{2+\delta}\} \to 0 $$
则随机变量之和 $\sum_{k=1}^n X_k$ 的标准化变量
$$ Z_n = \frac{\sum_{k=1}^n X_k - \sum_{k=1}^n \mu_k}{B_n} $$
的分布函数 $F_n(x)$ 对于任意 $x$ 满足
$$ \lim_{n \to \infty} F_n(x) = \Phi(x) $$

* **注**：此定理说明，随机变量 $X_k$ 不需要服从同一分布，只要满足一定条件（李雅普诺夫条件），其和的极限分布也是正态分布。

**定理 3 (棣莫弗-拉普拉斯定理 / De Moivre-Laplace Theorem)**：
设 $\eta_n (n=1,2,\cdots)$ 服从参数为 $n, p (0 < p < 1)$ 的二项分布，则对于任意 $x$ ，有
$$ \lim_{n \to \infty} P\left\{ \frac{\eta_n - np}{\sqrt{np(1-p)}} \le x \right\} = \int_{-\infty}^x \frac{1}{\sqrt{2\pi}}e^{-t^2/2}dt = \Phi(x) $$

**二项分布的正态近似**：
当 $n$ 充分大时，二项随机变量 $X \sim B(n, p)$ 近似服从 $N(np, np(1-p))$ 。
$$ P\{X \le k\} \approx \Phi\left(\frac{k - np}{\sqrt{np(1-p)}}\right) $$

## 第六章 样本及抽样分布

### §1 随机样本

**定义**：设 $X$ 是具有分布函数 $F$ 的随机变量，若 $X_1, X_2, \cdots, X_n$ 是相互独立的且都与 $X$ 具有相同分布函数 $F$ 的随机变量，则称 $X_1, X_2, \cdots, X_n$ 为来自总体 $X$ 的简单**随机样本**，简称**样本**。 $n$ 称为**样本容量**。

**定义**：如果 $x_1, x_2, \cdots, x_n$ 依次是样本 $X_1, X_2, \cdots, X_n$ 的观察值，则称 $x_1, x_2, \cdots, x_n$ 为**样本值**。

### §2 直方图和箱线图

**定义 (样本 $p$ 分位数)**：
设 $x_1, x_2, \cdots, x_n$ 是样本观察值，按自小到大排序为 $x_{(1)} \le x_{(2)} \le \cdots \le x_{(n)}$ 。
样本 $p$ 分位数 $x_p$ ($0 < p < 1$) 定义为：
$$ x_p = \begin{cases} x_{([np]+1)}, & \text{当 } np \text{ 不是整数} \\ \frac{1}{2}[x_{(np)} + x_{(np+1)}], & \text{当 } np \text{ 是整数} \end{cases} $$

**定义 (四分位数)**：

* **第一四分位数** ($Q_1$)：即 $0.25$ 分位数 $x_{0.25}$ 。
* **中位数** ($M$ 或 $Q_2$)：即 $0.5$ 分位数 $x_{0.5}$ 。
* **第三四分位数** ($Q_3$)：即 $0.75$ 分位数 $x_{0.75}$ 。
* **四分位间距** ($IQR$)： $IQR = Q_3 - Q_1$ 。

### §3 抽样分布

**定义 (统计量)**：
设 $X_1, X_2, \cdots, X_n$ 是来自总体 $X$ 的一个样本， $g(X_1, X_2, \cdots, X_n)$ 是 $X_1, X_2, \cdots, X_n$ 的函数，若 $g$ 中**不含未知参数**，则称 $g(X_1, X_2, \cdots, X_n)$ 为**统计量**。

**[补充] 常用统计量**：

1. **样本均值**： $\bar{X} = \frac{1}{n}\sum_{i=1}^n X_i$
2. **样本方差**： $S^2 = \frac{1}{n-1}\sum_{i=1}^n (X_i - \bar{X})^2 = \frac{1}{n-1}\left(\sum_{i=1}^n X_i^2 - n\bar{X}^2\right)$
3. **样本标准差**： $S = \sqrt{S^2}$
4. **样本 $k$ 阶原点矩**： $A_k = \frac{1}{n}\sum_{i=1}^n X_i^k$
5. **样本 $k$ 阶中心矩**： $B_k = \frac{1}{n}\sum_{i=1}^n (X_i - \bar{X})^k$

**定义 ($\chi^2$ 分布)**：
设 $X_1, X_2, \cdots, X_n$ 是来自总体 $N(0,1)$ 的样本，则称统计量
$$ \chi^2 = \sum_{i=1}^n X_i^2 $$
服从自由度为 $n$ 的 $\chi^2$ 分布，记为 $\chi^2 \sim \chi^2(n)$ 。

* **性质**：
    1. 若 $\chi^2 \sim \chi^2(n)$ ，则 $E(\chi^2) = n, \quad D(\chi^2) = 2n$ 。
    2. (可加性) 若 $\chi^2_1 \sim \chi^2(n_1), \chi^2_2 \sim \chi^2(n_2)$ 且相互独立，则 $\chi^2_1 + \chi^2_2 \sim \chi^2(n_1 + n_2)$ 。

**定义 ($t$ 分布)**：
设 $X \sim N(0,1), Y \sim \chi^2(n)$ ，且 $X, Y$ **相互独立**，则称随机变量
$$ t = \frac{X}{\sqrt{Y/n}} $$
服从自由度为 $n$ 的 $t$ 分布，记为 $t \sim t(n)$ 。

* **性质**：概率密度函数关于 $y$ 轴对称。当 $n$ 足够大时， $t$ 分布近似于 $N(0,1)$ 。

**定义 ($F$ 分布)**：
设 $U \sim \chi^2(n_1), V \sim \chi^2(n_2)$ ，且 $U, V$ **相互独立**，则称随机变量
$$ F = \frac{U/n_1}{V/n_2} $$
服从自由度为 $(n_1, n_2)$ 的 $F$ 分布，记为 $F \sim F(n_1, n_2)$ 。

* **性质**： $F_{1-\alpha}(n_1, n_2) = \frac{1}{F_{\alpha}(n_2, n_1)}$ 。

### 正态总体的抽样分布 (重要定理)

**定理 1**：
设 $X_1, X_2, \cdots, X_n$ 是来自正态总体 $N(\mu, \sigma^2)$ 的样本， $\bar{X}$ 是样本均值，则
$$ \bar{X} \sim N\left(\mu, \frac{\sigma^2}{n}\right) $$

**定理 2**：
设 $X_1, X_2, \cdots, X_n$ 是来自正态总体 $N(\mu, \sigma^2)$ 的样本， $\bar{X}, S^2$ 分别是样本均值和样本方差，则

1. **$\frac{(n-1)S^2}{\sigma^2} \sim \chi^2(n-1)$**
2. **$\bar{X}$ 与 $S^2$ 相互独立**

**定理 3 ($t$ 统计量)**：
设 $X_1, X_2, \cdots, X_n$ 是来自正态总体 $N(\mu, \sigma^2)$ 的样本， $\bar{X}, S^2$ 分别是样本均值和样本方差，则
$$ \frac{\bar{X} - \mu}{S/\sqrt{n}} \sim t(n-1) $$

**定理 4 (两个正态总体)**：
设 $X_1, \cdots, X_{n_1}$ 与 $Y_1, \cdots, Y_{n_2}$ 分别是来自正态总体 $N(\mu_1, \sigma_1^2)$ 和 $N(\mu_2, \sigma_2^2)$ 的样本，且两样本相互独立。

1. (均值差的分布) $\bar{X} - \bar{Y} \sim N\left(\mu_1 - \mu_2, \frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}\right)$ 。
2. (方差比的分布) $F = \frac{S_1^2 / \sigma_1^2}{S_2^2 / \sigma_2^2} \sim F(n_1 - 1, n_2 - 1)$ 。
3. 特别地，当 $\sigma_1^2 = \sigma_2^2 = \sigma^2$ 时：
    $$ \frac{(\bar{X} - \bar{Y}) - (\mu_1 - \mu_2)}{S_w\sqrt{\frac{1}{n_1} + \frac{1}{n_2}}} \sim t(n_1 + n_2 - 2) $$
    其中 $S_w^2 = \frac{(n_1-1)S_1^2 + (n_2-1)S_2^2}{n_1+n_2-2}$ 。

## 第七章 参数估计

### §1 点估计

**定义 (点估计)**：
设总体 $X$ 的分布函数 $F(x; \theta)$ 的形式为已知， $\theta$ 是待估参数。 $X_1, X_2, \cdots, X_n$ 是 $X$ 的一个样本， $x_1, x_2, \cdots, x_n$ 是相应的样本值。
点估计问题就是构造一个适当的统计量 $\hat{\theta}(X_1, X_2, \cdots, X_n)$ ，用它的观察值 $\hat{\theta}(x_1, x_2, \cdots, x_n)$ 作为未知参数 $\theta$ 的近似值。
我们称 $\hat{\theta}(X_1, X_2, \cdots, X_n)$ 为 $\theta$ 的**估计量**，称 $\hat{\theta}(x_1, x_2, \cdots, x_n)$ 为 $\theta$ 的**估计值**。

**[补充] 矩估计法 (Moment Estimation)**：
基于“替换原则”，用**样本矩**替换**总体矩**。
设总体 $X$ 的 $k$ 阶原点矩 $\mu_k = E(X^k)$ 存在。样本的 $k$ 阶原点矩为 $A_k = \frac{1}{n}\sum_{i=1}^n X_i^k$ 。
若待估参数为 $\theta_1, \cdots, \theta_k$ ，由方程组：
$$ \begin{cases} \mu_1(\theta_1, \cdots, \theta_k) = A_1 \\ \vdots \\ \mu_k(\theta_1, \cdots, \theta_k) = A_k \end{cases} $$
解出的 $\hat{\theta}_1, \cdots, \hat{\theta}_k$ 即为**矩估计量**。

**[补充] 极大似然估计法 (Maximum Likelihood Estimation, MLE)**：

1. **似然函数**：
    * (离散型) 设 $X$ 的分布律为 $P\{X=x\} = p(x; \theta)$ 。似然函数为：
        $$ L(\theta) = \prod_{i=1}^n p(x_i; \theta) $$
    * (连续型) 设 $X$ 的概率密度为 $f(x; \theta)$ 。似然函数为：
        $$ L(\theta) = \prod_{i=1}^n f(x_i; \theta) $$
2. **定义**：若统计量 $\hat{\theta}(X_1, \cdots, X_n)$ 满足
    $$ L(\hat{\theta}) = \max_{\theta \in \Theta} L(\theta) $$
    则称 $\hat{\theta}$ 为 $\theta$ 的**极大似然估计量**。
3. **解法**：通常通过解**对数似然方程**求得：
    $$ \frac{d}{d\theta} \ln L(\theta) = 0 $$

### §3 估计量的评选标准

**定义 (无偏性)**：
设 $X_1, X_2, \cdots, X_n$ 是总体 $X$ 的一个样本， $\theta \in \Theta$ 是包含在总体 $X$ 的分布中的待估参数。若估计量 $\hat{\theta} = \hat{\theta}(X_1, \cdots, X_n)$ 的数学期望 $E(\hat{\theta})$ 存在，且对于任意 $\theta \in \Theta$ 有
$$ E(\hat{\theta}) = \theta $$
则称 $\hat{\theta}$ 是 $\theta$ 的**无偏估计量**。
*(注：样本均值 $\bar{X}$ 是总体均值 $\mu$ 的无偏估计；样本方差 $S^2$ 是总体方差 $\sigma^2$ 的无偏估计)*

**定义 (有效性)**：
设 $\hat{\theta}_1 = \hat{\theta}_1(X_1, \cdots, X_n)$ 与 $\hat{\theta}_2 = \hat{\theta}_2(X_1, \cdots, X_n)$ 都是参数 $\theta$ 的无偏估计量，若对于任意 $\theta \in \Theta$ ，有
$$ D(\hat{\theta}_1) \le D(\hat{\theta}_2) $$
且至少对于某一个 $\theta \in \Theta$ 上式中的不等号成立，则称 $\hat{\theta}_1$ 比 $\hat{\theta}_2$ **有效**。

**定义 (一致性 / 相合性)**：
设 $\hat{\theta}_n = \hat{\theta}_n(X_1, \cdots, X_n)$ 为参数 $\theta$ 的估计量，若对于任意 $\theta \in \Theta$ ，当 $n \to \infty$ 时， $\hat{\theta}_n$ **依概率收敛**于 $\theta$ ，即对于任意 $\varepsilon > 0$ ，有
$$ \lim_{n \to \infty} P\{|\hat{\theta}_n - \theta| < \varepsilon\} = 1 $$
则称 $\hat{\theta}_n$ 为 $\theta$ 的**一致估计量**（或**相合估计量**）。

### §4 区间估计

**定义**：
设总体 $X$ 的分布函数 $F(x;\theta)$ 含有一个未知参数 $\theta, \theta \in \Theta$ 。对于给定值 $\alpha (0<\alpha<1)$ ，若由来自 $X$ 的样本 $X_1, X_2, \cdots, X_n$ 确定的两个统计量 $\underline{\theta} = \underline{\theta}(X_1, \cdots, X_n)$ 和 $\bar{\theta} = \bar{\theta}(X_1, \cdots, X_n)$ ($\underline{\theta} < \bar{\theta}$) ，对于任意 $\theta \in \Theta$ 满足
$$ P\{\underline{\theta} < \theta < \bar{\theta}\} \ge 1-\alpha $$
则称随机区间 $(\underline{\theta}, \bar{\theta})$ 是 $\theta$ 的**置信水平**为 $1-\alpha$ 的**置信区间**。
$\underline{\theta}$ 和 $\bar{\theta}$ 分别称为**置信下限**和**置信上限**， $1-\alpha$ 称为**置信水平**。

**[补充] 枢轴量法 (Pivot Method)**：
寻找一个变量 $G(X_1, \cdots, X_n; \theta)$ ，其分布**不依赖于未知参数** $\theta$ ，称之为**枢轴量**。利用枢轴量的分布求出置信区间。

### §5 正态总体均值与方差的区间估计

以下设总体 $X \sim N(\mu, \sigma^2)$ ，样本为 $X_1, \cdots, X_n$ ， $\bar{X}, S^2$ 分别为样本均值和样本方差。置信水平为 $1-\alpha$ 。

#### 1. 均值 $\mu$ 的置信区间

* **情形一： $\sigma^2$ 已知**
  * 枢轴量： $Z = \frac{\bar{X} - \mu}{\sigma / \sqrt{n}} \sim N(0, 1)$
  * 置信区间： $\left( \bar{X} - \frac{\sigma}{\sqrt{n}}z_{\alpha/2}, \quad \bar{X} + \frac{\sigma}{\sqrt{n}}z_{\alpha/2} \right)$

* **情形二： $\sigma^2$ 未知**
  * 枢轴量： $T = \frac{\bar{X} - \mu}{S / \sqrt{n}} \sim t(n-1)$
  * 置信区间： $\left( \bar{X} - \frac{S}{\sqrt{n}}t_{\alpha/2}(n-1), \quad \bar{X} + \frac{S}{\sqrt{n}}t_{\alpha/2}(n-1) \right)$

#### 2. 方差 $\sigma^2$ 的置信区间

* **情形： $\mu$ 未知**
  * 枢轴量： $\chi^2 = \frac{(n-1)S^2}{\sigma^2} \sim \chi^2(n-1)$
  * 置信区间： $\left( \frac{(n-1)S^2}{\chi^2_{\alpha/2}(n-1)}, \quad \frac{(n-1)S^2}{\chi^2_{1-\alpha/2}(n-1)} \right)$
    *(注： $\chi^2$ 分布不对称， $\chi^2_{\alpha/2}$ 是上侧分位数，数值较大，作分母对应下限； $\chi^2_{1-\alpha/2}$ 数值较小，作分母对应上限)*

#### 3. 两个正态总体 (补充)

设 $X \sim N(\mu_1, \sigma_1^2), Y \sim N(\mu_2, \sigma_2^2)$ ，两样本独立。

* **均值差 $\mu_1 - \mu_2$** ($\sigma_1^2 = \sigma_2^2 = \sigma^2$ 未知)：
  * 枢轴量： $T = \frac{(\bar{X}-\bar{Y}) - (\mu_1-\mu_2)}{S_w \sqrt{\frac{1}{n_1}+\frac{1}{n_2}}} \sim t(n_1+n_2-2)$
  * 其中 $S_w^2 = \frac{(n_1-1)S_1^2 + (n_2-1)S_2^2}{n_1+n_2-2}$
  * 置信区间： $(\bar{X}-\bar{Y}) \pm t_{\alpha/2}(n_1+n_2-2) \cdot S_w \sqrt{\frac{1}{n_1}+\frac{1}{n_2}}$

* **方差比 $\sigma_1^2 / \sigma_2^2$** ($\mu_1, \mu_2$ 未知)：
  * 枢轴量： $F = \frac{S_1^2 / \sigma_1^2}{S_2^2 / \sigma_2^2} \sim F(n_1-1, n_2-1)$
  * 置信区间： $\left( \frac{S_1^2}{S_2^2} \frac{1}{F_{\alpha/2}(n_1-1, n_2-1)}, \quad \frac{S_1^2}{S_2^2} \frac{1}{F_{1-\alpha/2}(n_1-1, n_2-1)} \right)$

### §6 (0-1)分布参数的区间估计

**定义**：
对于大样本情形 ($n$ 充分大)，利用中心极限定理。
设总体 $X \sim B(1, p)$ ，枢轴量近似为：
$$ U = \frac{\bar{X} - p}{\sqrt{\bar{X}(1-\bar{X})/n}} \overset{\cdot}{\sim} N(0, 1) $$
$p$ 的近似置信区间为：
$$ \left( \bar{X} - z_{\alpha/2}\sqrt{\frac{\bar{X}(1-\bar{X})}{n}}, \quad \bar{X} + z_{\alpha/2}\sqrt{\frac{\bar{X}(1-\bar{X})}{n}} \right) $$

### §7 单侧置信区间

**定义**：
对于给定值 $\alpha (0<\alpha<1)$ ：

1. 若 $\underline{\theta} = \underline{\theta}(X_1, \cdots, X_n)$ 满足 $P\{\theta > \underline{\theta}\} \ge 1-\alpha$ ，则称随机区间 $(\underline{\theta}, \infty)$ 为 $\theta$ 的**单侧置信下限区间**， $\underline{\theta}$ 称为**单侧置信下限**。
2. 若 $\bar{\theta} = \bar{\theta}(X_1, \cdots, X_n)$ 满足 $P\{\theta < \bar{\theta}\} \ge 1-\alpha$ ，则称随机区间 $(-\infty, \bar{\theta})$ 为 $\theta$ 的**单侧置信上限区间**， $\bar{\theta}$ 称为**单侧置信上限**。

## 第八章 假设检验

### §1 假设检验

**定义 (假设)**：
在假设检验中，通常把一个主要假设称为**原假设**（或**零假设**），记为 $H_0$ ；把 $H_0$ 的对立假设称为**备择假设**，记为 $H_1$ 。

**定义 (两类错误)**：
由于样本具有随机性，我们所作出的决策有可能犯错误。错误分为两类：

1. **第一类错误**（“弃真”错误）： $H_0$ 实际上是真的，但根据样本观察值我们却拒绝了 $H_0$ 。
    $$ P\{\text{拒绝 } H_0 \mid H_0 \text{ 为真}\} \le \alpha $$
2. **第二类错误**（“取伪”错误）： $H_0$ 实际上不真（即 $H_1$ 为真），但根据样本观察值我们却接受了 $H_0$ 。
    $$ P\{\text{接受 } H_0 \mid H_0 \text{ 为不真}\} = \beta $$

**定义 (显著性水平)**：
在假设检验中，我们通常控制犯第一类错误的概率。即给定一个很小的数 $\alpha (0<\alpha<1)$ ，要求犯第一类错误的概率不超过 $\alpha$ 。称 $\alpha$ 为**显著性水平**。这种只控制第一类错误概率的检验问题称为**显著性检验**。

**定义 (拒绝域与临界点)**：
当样本值落入某个区域 $W$ 时，我们拒绝 $H_0$ ，称区域 $W$ 为**拒绝域**。拒绝域的边界点称为**临界点**（或**阈值**）。

**定义 (双边与单边假设)**：

* **双边假设**：备择假设 $H_1$ 包含不等号（如 $H_1: \mu \ne \mu_0$ ），拒绝域分布在两端。
* **单边假设**：备择假设 $H_1$ 带有不等号方向（如 $H_1: \mu > \mu_0$ 或 $H_1: \mu < \mu_0$ ）。
  * $H_1: \mu > \mu_0$ 称为**右边检验**。
  * $H_1: \mu < \mu_0$ 称为**左边检验**。

### §2 正态总体均值的假设检验

设总体 $X \sim N(\mu, \sigma^2)$ ，样本为 $X_1, \cdots, X_n$ 。

**1. 单个正态总体均值 $\mu$ 的检验 (Z检验与t检验)**

| 条件 | 原假设 $H_0$ | 检验统计量 | 拒绝域 ($W$) |
| :--- | :--- | :--- | :--- |
| **$\sigma^2$ 已知** | $\mu = \mu_0$ | $\displaystyle Z = \frac{\bar{X} - \mu_0}{\sigma / \sqrt{n}}$ | $|z| \ge z_{\alpha/2}$ |
| | $\mu \le \mu_0$ | | $z \ge z_{\alpha}$ |
| | $\mu \ge \mu_0$ | | $z \le -z_{\alpha}$ |
| **$\sigma^2$ 未知** | $\mu = \mu_0$ | $\displaystyle t = \frac{\bar{X} - \mu_0}{S / \sqrt{n}}$ | $|t| \ge t_{\alpha/2}(n-1)$ |
| | $\mu \le \mu_0$ | | $t \ge t_{\alpha}(n-1)$ |
| | $\mu \ge \mu_0$ | | $t \le -t_{\alpha}(n-1)$ |

**2. 两个正态总体均值差 $\mu_1 - \mu_2$ 的检验**
设 $X \sim N(\mu_1, \sigma_1^2), Y \sim N(\mu_2, \sigma_2^2)$ ，两样本独立。

* **$\sigma_1^2, \sigma_2^2$ 已知**：
    统计量 $Z = \frac{(\bar{X} - \bar{Y}) - \delta}{\sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}}$ 。
* **$\sigma_1^2 = \sigma_2^2 = \sigma^2$ 未知 ($t$ 检验)**：
    统计量
    $$ t = \frac{(\bar{X} - \bar{Y}) - \delta}{S_w \sqrt{\frac{1}{n_1} + \frac{1}{n_2}}} \sim t(n_1+n_2-2) $$
    其中 $S_w^2 = \frac{(n_1-1)S_1^2 + (n_2-1)S_2^2}{n_1+n_2-2}$ 。
    (检验 $H_0: \mu_1 - \mu_2 = \delta$ ，通常 $\delta=0$ )

### §3 正态总体方差的假设检验

**1. 单个正态总体方差 $\sigma^2$ 的检验 ($\chi^2$ 检验)**
检验假设 $H_0: \sigma^2 = \sigma_0^2$ 。

* **检验统计量**：
    $$ \chi^2 = \frac{(n-1)S^2}{\sigma_0^2} \sim \chi^2(n-1) $$
* **拒绝域**：
  * $H_1: \sigma^2 \ne \sigma_0^2$ (双边)： $\chi^2 \le \chi^2_{1-\alpha/2}(n-1)$ 或 $\chi^2 \ge \chi^2_{\alpha/2}(n-1)$
  * $H_1: \sigma^2 > \sigma_0^2$ (单边)： $\chi^2 \ge \chi^2_{\alpha}(n-1)$
  * $H_1: \sigma^2 < \sigma_0^2$ (单边)： $\chi^2 \le \chi^2_{1-\alpha}(n-1)$

**2. 两个正态总体方差比 $\sigma_1^2 / \sigma_2^2$ 的检验 ($F$ 检验)**
检验假设 $H_0: \sigma_1^2 = \sigma_2^2$ 。

* **检验统计量**：
    $$ F = \frac{S_1^2}{S_2^2} \sim F(n_1-1, n_2-1) $$
* **拒绝域** ($H_1: \sigma_1^2 \ne \sigma_2^2$)：
    $F \le F_{1-\alpha/2}(n_1-1, n_2-1)$ 或 $F \ge F_{\alpha/2}(n_1-1, n_2-1)$

### §4 置信区间与假设检验之间的关系

**定理**：
设 $(\underline{\theta}, \bar{\theta})$ 是参数 $\theta$ 的置信水平为 $1-\alpha$ 的置信区间。
对于双边检验问题 $H_0: \theta = \theta_0$ vs $H_1: \theta \ne \theta_0$ ，若显著性水平为 $\alpha$ ，则其拒绝域等价于：
$$ \theta_0 \notin (\underline{\theta}, \bar{\theta}) $$
即：若假设值 $\theta_0$ 落在置信区间之外，则拒绝 $H_0$ ；否则接受 $H_0$ 。

### §5 样本容量的选取 (OC 函数)

**定义 (OC 函数)**：
在假设检验中，我们将**接受**原假设 $H_0$ 的概率作为参数 $\theta$ (或 $\mu, \sigma$ 等) 的函数，称为检验的 **OC 函数** (Operating Characteristic function)，记为 $L(\theta)$ 。
$$ L(\theta) = P_{\theta}\{\text{接受 } H_0\} $$

**定义 (功效函数 / Power Function)**：
函数 $\beta(\theta) = 1 - L(\theta)$ 称为检验的**功效函数**。它表示在参数为 $\theta$ 时拒绝 $H_0$ 的概率。

* 当 $\theta$ 属于 $H_0$ 区域时， $1-L(\theta)$ 是犯第一类错误的概率。
* 当 $\theta$ 属于 $H_1$ 区域时， $L(\theta)$ 是犯第二类错误的概率 $\beta$ 。

### §6 分布拟合检验 ($\chi^2$ 拟合检验)

**定义 (Pearson $\chi^2$ 统计量)**：
设总体 $X$ 的分布函数为 $F(x)$ ，其形式未知。将总体取值范围分成 $k$ 个互不相容的小区间。在 $n$ 次试验中，样本落入第 $i$ 个区间的频数为 $f_i$ 。根据原假设 $H_0$ 计算出的理论概率为 $p_i$ ，理论频数为 $n p_i$ 。
构造统计量：
$$ \chi^2 = \sum_{i=1}^k \frac{(f_i - n p_i)^2}{n p_i} $$

**定理 (皮尔逊定理)**：
若 $n$ 充分大，上述统计量近似服从 $\chi^2$ 分布。其自由度为 $k - r - 1$ ，其中：

* $k$ ：分组数。
* $r$ ：根据样本估计出的未知参数的个数。
* 1 ：约束条件 $\sum p_i = 1$ 消耗的一个自由度。

**检验规则**：
对于给定的显著性水平 $\alpha$ ，若 $\chi^2 \ge \chi^2_{\alpha}(k-r-1)$ ，则拒绝 $H_0$ ，认为总体不服从该分布。

### §7 假设检验问题的 $p$ 值法

**定义 ($p$ 值 / p-value)**：
$p$ 值是由检验统计量的样本观察值得出的原假设可被拒绝的**最小显著性水平**。
或者说， $p$ 值是在原假设 $H_0$ 为真的条件下，检验统计量取到比当前样本观察值“更极端”数值的概率。

**检验准则**：

* 若 $p \le \alpha$ ，则在显著性水平 $\alpha$ 下**拒绝** $H_0$ 。
* 若 $p > \alpha$ ，则在显著性水平 $\alpha$ 下**接受** $H_0$ 。
