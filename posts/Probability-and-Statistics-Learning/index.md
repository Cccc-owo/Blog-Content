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

1. **随机试验 ($E$)**：满足以下三个特点的试验：
    * 可在相同条件下重复进行；
    * 每次试验的可能结果不止一个，且所有可能结果在试验前是已知的；
    * 试验结束前不能确定哪一个结果会出现。
2. **样本空间 ($S$)**：随机试验 $E$ 的所有可能结果组成的集合。
3. **随机事件**：样本空间 $S$ 的子集，简称**事件**。
    * **基本事件**：由一个样本点组成的单点集。
    * **必然事件 ($S$)**：每次试验必然发生的事件。
    * **不可能事件 ($\emptyset$)**：每次试验必然不发生的事件。

### §2 样本空间、随机事件

#### 事件的关系与运算

1. **包含 ($A \subset B$)**：若事件 $A$ 发生必然导致事件 $B$ 发生。
2. **和事件 ($A \cup B$)**：事件 $A$ 与 $B$ 至少有一个发生。
3. **积事件 ($A \cap B$ 或 $AB$)**：事件 $A$ 与 $B$ 同时发生。
4. **差事件 ($A - B$)**：事件 $A$ 发生而 $B$ 不发生。
5. **互不相容 (Mutually Exclusive)**：若 $AB = \emptyset$，称 $A$ 与 $B$ 互不相容（或互斥）。
6. **对立事件 ($\bar{A}$)**：若 $A \cup B = S$ 且 $AB = \emptyset$，称 $A$ 与 $B$ 互为对立事件（逆事件）。
    * *性质*：$A - B = A \bar{B} = A - AB$。
7. **运算律**：
    * **德摩根律 (De Morgan's Laws)**：
        $$ \overline{A \cup B} = \bar{A} \cap \bar{B}, \quad \overline{A \cap B} = \bar{A} \cup \bar{B} $$

### §3 频率与概率

#### 概率的公理化定义

设 $E$ 是随机试验，$S$ 是样本空间。对于 $E$ 的每一事件 $A$ 赋予一个实数 $P(A)$，称为事件 $A$ 的概率，如果满足：

1. **非负性**：$P(A) \ge 0$。
2. **规范性**：$P(S) = 1$。
3. **可列可加性**：设 $A_1, A_2, \dots$ 是互不相容的事件，则
    $$ P\left(\bigcup_{k=1}^{\infty} A_k\right) = \sum_{k=1}^{\infty} P(A_k) $$

#### 概率的性质

1. $P(\emptyset) = 0$。
2. **有限可加性**：若 $A_1, \dots, A_n$ 互不相容，则 $P(\cup A_i) = \sum P(A_i)$。
3. 若 $A \subset B$，则 $P(B-A) = P(B) - P(A)$，且 $P(A) \le P(B)$。
4. **加法公式**：对于任意两事件 $A, B$，
    $$ P(A \cup B) = P(A) + P(B) - P(AB) $$
    *推广（三事件）*：
    $$ P(A \cup B \cup C) = P(A)+P(B)+P(C) - P(AB)-P(AC)-P(BC) + P(ABC) $$

### §4 等可能概型（古典概型）

如果试验 $E$ 满足：(1) 样本空间 $S$ 只有有限个样本点；(2) 每个基本事件发生的可能性相同。则称 $E$ 为**古典概型**。
$$ P(A) = \frac{A \text{包含的基本事件数}}{S \text{中基本事件总数}} $$

### §5 条件概率

1. **定义**：设 $A, B$ 为两事件，且 $P(A)>0$，则
    $$ P(B|A) = \frac{P(AB)}{P(A)} $$
2. **乘法公式**：
    * $P(AB) = P(A)P(B|A)$。
    * 推广：$P(A_1 A_2 \dots A_n) = P(A_1)P(A_2|A_1)\dots P(A_n|A_1 \dots A_{n-1})$。
3. **全概率公式**：
    设 $B_1, \dots, B_n$ 为 $S$ 的一个划分（互不相容且和为 $S$），且 $P(B_i)>0$，则
    $$ P(A) = \sum_{i=1}^n P(B_i)P(A|B_i) $$
4. **贝叶斯公式 (Bayes Formula)**：
    $$ P(B_i|A) = \frac{P(B_i)P(A|B_i)}{\sum_{j=1}^n P(B_j)P(A|B_j)} $$
    *注：此公式通常用于“由果索因”，已知结果 $A$ 发生，推断它是由原因 $B_i$ 导致的概率。*

### §6 独立性

1. **定义**：若 $P(AB) = P(A)P(B)$，称 $A, B$ **相互独立**。
2. **性质**：若 $A, B$ 独立，则 $(A, \bar{B}), (\bar{A}, B), (\bar{A}, \bar{B})$ 均独立。
3. **三个事件独立**：$A, B, C$ 相互独立需同时满足四个等式：
    * $P(AB)=P(A)P(B)$
    * $P(BC)=P(B)P(C)$
    * $P(AC)=P(A)P(C)$
    * $P(ABC)=P(A)P(B)P(C)$
    *(注：仅满足前三条称为两两独立，两两独立 $\nRightarrow$ 相互独立)*

---

## 第二章 随机变量及其分布

### §1 随机变量

**定义**：设随机试验的样本空间为 $S$，若 $X=X(e)$ 是定义在 $S$ 上的单值实函数，则称 $X$ 为**随机变量**。

### §2 离散型随机变量及其分布律

如果 $X$ 的全部可能取值只有有限个或可列无穷个，称 $X$ 为**离散型随机变量**。

* **分布律**：$P\{X=x_k\} = p_k, \quad k=1,2,\dots$
  * 条件：$p_k \ge 0, \quad \sum p_k = 1$。

#### 常见离散分布

1. **0-1分布 (Bernoulli)**：$X \sim B(1, p)$
    $$ P\{X=k\} = p^k(1-p)^{1-k}, \quad k=0,1 $$
2. **二项分布 (Binomial)**：$X \sim B(n, p)$
    $$ P\{X=k\} = \binom{n}{k} p^k (1-p)^{n-k}, \quad k=0,1,\dots,n $$
    *模型：$n$ 重伯努利试验中事件 $A$ 发生的次数。*
3. **泊松分布 (Poisson)**：$X \sim \pi(\lambda)$
    $$ P\{X=k\} = \frac{\lambda^k e^{-\lambda}}{k!}, \quad k=0,1,2,\dots $$
    *泊松定理：当 $n$ 很大，$p$ 很小，且 $\lambda = np$ 为常数时，$\binom{n}{k}p^k(1-p)^{n-k} \approx \frac{\lambda^k e^{-\lambda}}{k!}$。*

### §3 随机变量的分布函数

**定义**：$F(x) = P\{X \le x\}, \quad -\infty < x < +\infty$。
**性质**：

1. $F(x)$ 单调不减。
2. $0 \le F(x) \le 1$，且 $F(-\infty)=0, F(+\infty)=1$。
3. $F(x)$ 是**右连续**的，即 $F(x+0) = F(x)$。
4. $P\{a < X \le b\} = F(b) - F(a)$。

### §4 连续型随机变量及其概率密度

**定义**：若存在非负函数 $f(x)$，使得 $F(x) = \int_{-\infty}^x f(t)dt$，则称 $X$ 为**连续型随机变量**，$f(x)$ 为**概率密度函数**。
**性质**：

1. $\int_{-\infty}^{+\infty} f(x)dx = 1$。
2. 若 $f(x)$ 在 $x$ 处连续，则 $F'(x) = f(x)$。
3. $P\{X=x_0\} = 0$ （连续型变量取任一指定值的概率为0）。

#### 常见连续分布

1. **均匀分布**：$X \sim U(a, b)$
    $$ f(x) = \begin{cases} \frac{1}{b-a}, & a < x < b \\ 0, & \text{其他} \end{cases} $$
2. **指数分布**：$X \sim E(\lambda)$
    $$ f(x) = \begin{cases} \lambda e^{-\lambda x}, & x > 0 \\ 0, & x \le 0 \end{cases} $$
    *性质：无记忆性 $P\{X>s+t | X>s\} = P\{X>t\}$。*
3. **正态分布**：$X \sim N(\mu, \sigma^2)$
    $$ f(x) = \frac{1}{\sqrt{2\pi}\sigma} e^{-\frac{(x-\mu)^2}{2\sigma^2}} $$
    * $f(x)$ 关于 $x=\mu$ 对称，在 $x=\mu$ 处取最大值。
    * **$3\sigma$ 法则**：$P\{|X-\mu| < 3\sigma\} \approx 0.9974$。
    * **标准化**：$Z = \frac{X-\mu}{\sigma} \sim N(0, 1)$。

### §5 随机变量的函数的分布

**定理**：设 $X$ 为连续型 RV，密度为 $f_X(x)$。令 $Y=g(X)$，若 $g(x)$ 严格单调可导，则 $Y$ 的密度为：
$$ f_Y(y) = \begin{cases} f_X[h(y)] \cdot |h'(y)|, & y \in \text{值域} \\ 0, & \text{其他} \end{cases} $$
其中 $x = h(y)$ 是 $y=g(x)$ 的反函数。

---

## 第三章 多维随机变量及其分布

### §1 二维随机变量

1. **联合分布函数**：$F(x, y) = P\{X \le x, Y \le y\}$。
2. **性质**：
    * 关于 $x, y$ 单调不减。
    * $F(x, -\infty) = F(-\infty, y) = F(-\infty, -\infty) = 0$。
    * $F(+\infty, +\infty) = 1$。
    * $F(x, y)$ 关于 $x$ 和 $y$ 均右连续。

### §2 边缘分布

1. **离散型**：$P\{X=x_i\} = \sum_{j} P\{X=x_i, Y=y_j\}$。
2. **连续型**：
    * 边缘概率密度：
        $$ f_X(x) = \int_{-\infty}^{+\infty} f(x, y) dy $$
        $$ f_Y(y) = \int_{-\infty}^{+\infty} f(x, y) dx $$

### §3 条件分布

* **离散型**：$P\{X=x_i | Y=y_j\} = \frac{P\{X=x_i, Y=y_j\}}{P\{Y=y_j\}}$。
* **连续型**：
    $$ f_{X|Y}(x|y) = \frac{f(x, y)}{f_Y(y)} \quad (f_Y(y) > 0) $$

### §4 相互独立性

**定义**：$X, Y$ 相互独立 $\iff F(x, y) = F_X(x)F_Y(y)$ 对一切 $x, y$ 成立。

* **离散型**：$p_{ij} = p_{i\cdot} p_{\cdot j}$ 对一切 $i, j$ 成立。
* **连续型**：$f(x, y) = f_X(x)f_Y(y)$ 在平面上几乎处处成立。
* **重要结论**：若 $(X, Y)$ 服从二维正态分布，则 $X, Y$ 相互独立 $\iff \rho = 0$（即不相关）。

### §5 两个随机变量的函数的分布

1. **Z = X + Y (卷积公式)**：
    若 $X, Y$ 独立，
    $$ f_Z(z) = \int_{-\infty}^{+\infty} f_X(x)f_Y(z-x)dx $$
    * *推论*：正态变量的和仍为正态变量。$\chi^2$ 分布的可加性。
2. **最大值与最小值**：
    设 $X_1, \dots, X_n$ 独立同分布，分布函数为 $F(x)$。
    * $M = \max(X_i)$ 的分布函数：$F_{max}(z) = [F(z)]^n$。
    * $N = \min(X_i)$ 的分布函数：$F_{min}(z) = 1 - [1 - F(z)]^n$。

---

## 第四章 随机变量的数字特征

### §1 数学期望 (Expectation)

1. **定义**：
    * 离散型：$E(X) = \sum x_k p_k$ （绝对收敛时存在）。
    * 连续型：$E(X) = \int_{-\infty}^{+\infty} xf(x)dx$ （绝对收敛时存在）。
2. **随机变量函数的期望**：
    设 $Y = g(X)$，则 $E(Y) = \int_{-\infty}^{+\infty} g(x)f(x)dx$ （无需知道 $Y$ 的分布）。
3. **性质**：
    * $E(C) = C$。
    * $E(aX + b) = aE(X) + b$。
    * $E(X + Y) = E(X) + E(Y)$ (**总是成立**，无论是否独立)。
    * 若 $X, Y$ 相互独立，则 $E(XY) = E(X)E(Y)$。

### §2 方差 (Variance)

1. **定义**：$D(X) = E[(X - E(X))^2]$。
    * *计算公式*：$D(X) = E(X^2) - [E(X)]^2$。
2. **性质**：
    * $D(C) = 0$。
    * $D(aX + b) = a^2 D(X)$。
    * 若 $X, Y$ **相互独立**，则 $D(X \pm Y) = D(X) + D(Y)$。
3. **切比雪夫不等式 (Chebyshev's Inequality)**：
    设 $E(X)=\mu, D(X)=\sigma^2$，则对于任意 $\varepsilon > 0$：
    $$ P\{|X - \mu| \ge \varepsilon\} \le \frac{\sigma^2}{\varepsilon^2} $$

### §3 协方差与相关系数

1. **协方差**：$Cov(X, Y) = E[(X-\mu_x)(Y-\mu_y)] = E(XY) - E(X)E(Y)$。
    * 性质：$Cov(aX, bY) = ab Cov(X, Y)$; $D(X+Y) = D(X)+D(Y)+2Cov(X,Y)$。
2. **相关系数**：
    $$ \rho_{XY} = \frac{Cov(X, Y)}{\sqrt{D(X)}\sqrt{D(Y)}} $$
    * $|\rho_{XY}| \le 1$。
    * $|\rho_{XY}| = 1 \iff Y = aX + b$ (线性关系)。
    * $\rho_{XY} = 0 \iff X, Y$ **不相关**。
    * **独立与不相关**：独立一定不相关；不相关不一定独立（对于正态分布，二者等价）。

### **常见分布的期望与方差表**

| 分布 | 参数 | $E(X)$ | $D(X)$ |
| :--- | :--- | :--- | :--- |
| **0-1分布** | $p$ | $p$ | $p(1-p)$ |
| **二项分布** | $n, p$ | $np$ | $np(1-p)$ |
| **泊松分布** | $\lambda$ | $\lambda$ | $\lambda$ |
| **几何分布** | $p$ | $1/p$ | $(1-p)/p^2$ |
| **均匀分布** | $a, b$ | $\frac{a+b}{2}$ | $\frac{(b-a)^2}{12}$ |
| **指数分布** | $\lambda$ | $1/\lambda$ | $1/\lambda^2$ |
| **正态分布** | $\mu, \sigma^2$ | $\mu$ | $\sigma^2$ |

---

## 第五章 大数定律及中心极限定理

### §1 大数定律

1. **切比雪夫大数定律**：不相关的随机变量序列，方差一致有上界，则算术平均依概率收敛于期望平均。
2. **伯努利大数定律**：$f_A \xrightarrow{P} p$（频率依概率收敛于概率）。
3. **辛钦大数定律**：$X_i$ 独立同分布，期望存在，则 $\frac{1}{n}\sum X_i \xrightarrow{P} \mu$。

### §2 中心极限定理 (CLT)

1. **列维-林德伯格定理 (I.I.D. CLT)**：
    设 $X_1, \dots, X_n$ 独立同分布，期望 $\mu$，方差 $\sigma^2$。当 $n$ 充分大时：
    $$ \frac{\sum_{i=1}^n X_i - n\mu}{\sqrt{n}\sigma} \xrightarrow{d} N(0, 1) $$
2. **棣莫弗-拉普拉斯定理**：二项分布的正态近似。
    $$ \lim_{n\to\infty} P\left\{ \frac{X_n - np}{\sqrt{np(1-p)}} \le x \right\} = \Phi(x) $$

---

## 第六章 样本及抽样分布

### §1-2 随机样本与统计量

1. **简单随机样本**：$X_1, \dots, X_n$ 相互独立，且与总体分布相同。
2. **常用统计量**：
    * 样本均值：$\bar{X} = \frac{1}{n}\sum X_i$。
    * 样本方差：$S^2 = \frac{1}{n-1}\sum (X_i - \bar{X})^2$。
    * $k$ 阶原点矩：$A_k = \frac{1}{n}\sum X_i^k$。

### §3 抽样分布（三大分布）

1. **$\chi^2$ 分布**：设 $X_i \sim N(0, 1)$ 独立，则 $\sum_{i=1}^n X_i^2 \sim \chi^2(n)$。
    * 性质：$E(\chi^2) = n, D(\chi^2) = 2n$。可加性。
2. **$t$ 分布**：设 $X \sim N(0, 1), Y \sim \chi^2(n)$ 且独立，则 $T = \frac{X}{\sqrt{Y/n}} \sim t(n)$。
    * 性质：关于 $y$ 轴对称，图形似正态但峰低尾厚。$n\to\infty$ 时趋于 $N(0, 1)$。
3. **$F$ 分布**：设 $U \sim \chi^2(n_1), V \sim \chi^2(n_2)$ 且独立，则 $F = \frac{U/n_1}{V/n_2} \sim F(n_1, n_2)$。
    * 性质：$F_{1-\alpha}(n_1, n_2) = 1 / F_{\alpha}(n_2, n_1)$。

### **正态总体的抽样性质 (重要)**

设总体 $X \sim N(\mu, \sigma^2)$，则：

1. $\bar{X} \sim N(\mu, \sigma^2/n)$。
2. $\frac{(n-1)S^2}{\sigma^2} \sim \chi^2(n-1)$。
3. $\bar{X}$ 与 $S^2$ 相互独立。
4. **$t$ 统计量**：$\frac{\bar{X}-\mu}{S/\sqrt{n}} \sim t(n-1)$。

---

## 第七章 参数估计

### §1 点估计

1. **矩估计法**：
    基于大数定律，用样本矩 $A_k$ 替换总体矩 $\mu_k = E(X^k)$。
    令 $\mu_1(\theta_1, \dots) = \bar{X}, \quad \mu_2(\theta_1, \dots) = \frac{1}{n}\sum X_i^2$，解方程组。
2. **极大似然估计法 (MLE)**：
    * 似然函数：$L(\theta) = \prod_{i=1}^n f(x_i; \theta)$ （离散型用概率乘积）。
    * 步骤：
        1. 写出 $L(\theta)$。
        2. 取对数 $\ln L(\theta)$。
        3. 令 $\frac{d}{d\theta} \ln L(\theta) = 0$ 求解驻点。

### §2 估计量的评价标准

1. **无偏性**：$E(\hat{\theta}) = \theta$。
    * $S^2$ 是 $\sigma^2$ 的无偏估计，而 $B_2 = \frac{1}{n}\sum(X_i-\bar{X})^2$ 不是。
2. **有效性**：方差 $D(\hat{\theta})$ 越小越好。
3. **一致性**：当 $n\to\infty$，$\hat{\theta}$ 依概率收敛于 $\theta$。

### §4 区间估计

核心：寻找**枢轴量** $G(X_1, \dots, X_n; \theta)$，其分布已知且不依赖于 $\theta$。

**单正态总体 $N(\mu, \sigma^2)$ 的置信区间**：

1. **均值 $\mu$** ($\sigma^2$ 已知)：枢轴量 $Z = \frac{\bar{X}-\mu}{\sigma/\sqrt{n}} \sim N(0, 1)$。
    区间：$[\bar{x} - \frac{\sigma}{\sqrt{n}}z_{\alpha/2}, \bar{x} + \frac{\sigma}{\sqrt{n}}z_{\alpha/2}]$。
2. **均值 $\mu$** ($\sigma^2$ 未知)：枢轴量 $T = \frac{\bar{X}-\mu}{S/\sqrt{n}} \sim t(n-1)$。
    区间：$[\bar{x} - \frac{s}{\sqrt{n}}t_{\alpha/2}(n-1), \bar{x} + \frac{s}{\sqrt{n}}t_{\alpha/2}(n-1)]$。
3. **方差 $\sigma^2$** ($\mu$ 未知)：枢轴量 $\chi^2 = \frac{(n-1)S^2}{\sigma^2} \sim \chi^2(n-1)$。
    区间：$[\frac{(n-1)S^2}{\chi^2_{\alpha/2}(n-1)}, \frac{(n-1)S^2}{\chi^2_{1-\alpha/2}(n-1)}]$。

---

## 第八章 假设检验

### §1 基本思想

* **原理**：小概率事件在一次试验中基本上不会发生。
* **假设**：$H_0$（原假设，通常是想要拒绝的或维持现状的），$H_1$（备择假设）。
* **两类错误**：
  * 第 I 类 ($\alpha$)：$H_0$ 为真，却拒绝 $H_0$ (“弃真”)。
  * 第 II 类 ($\beta$)：$H_0$ 为假，却接受 $H_0$ (“取伪”)。
  * 原则：控制 $\alpha$ 的情况下，尽量减小 $\beta$。

### §2 正态总体的参数检验

**步骤**：

1. 提出 $H_0, H_1$。
2. 选取检验统计量（同区间估计的枢轴量）。
3. 确定拒绝域（由 $\alpha$ 和 $H_1$ 的方向决定）。
    * 双侧检验 ($H_1: \mu \ne \mu_0$)：拒绝域在两端 $|T| \ge k$。
    * 单侧检验 ($H_1: \mu > \mu_0$)：拒绝域在右端 $T \ge k$。

**常见检验 (单个正态总体)**：

* **均值检验 ($t$ 检验)**：$\sigma$ 未知，检验 $\mu = \mu_0$。
    统计量 $t = \frac{\bar{X}-\mu_0}{S/\sqrt{n}}$。
    若 $|t| \ge t_{\alpha/2}(n-1)$，拒绝 $H_0$。
* **方差检验 ($\chi^2$ 检验)**：$\mu$ 未知，检验 $\sigma^2 = \sigma_0^2$。
    统计量 $\chi^2 = \frac{(n-1)S^2}{\sigma_0^2}$。

---

## 第九章 方差分析与回归分析

### §1 单因素方差分析

* **问题**：检验因素 $A$ 的 $r$ 个水平下，总体均值是否有显著差异。
* **假设**：$H_0: \mu_1 = \mu_2 = \dots = \mu_r$。
* **分解**：总离差平方和 $S_T = S_A + S_E$。
  * $S_A$ (组间)：反映因素 $A$ 的影响。
  * $S_E$ (组内)：反映随机误差。
* **统计量**：
    $$ F = \frac{S_A / (r-1)}{S_E / (n-r)} \sim F(r-1, n-r) $$
    若 $F > F_{\alpha}$，拒绝 $H_0$，认为因素 $A$ 有显著影响。

### §3 一元线性回归

* **模型**：$Y = a + bx + \varepsilon, \quad \varepsilon \sim N(0, \sigma^2)$。
* **最小二乘法 (Least Squares)**：
    目标是最小化残差平方和 $Q(a, b) = \sum (y_i - (a+bx_i))^2$。
    解正规方程组得：
    $$ \hat{b} = \frac{L_{xy}}{L_{xx}}, \quad \hat{a} = \bar{y} - \hat{b}\bar{x} $$
    其中 $L_{xx} = \sum (x_i - \bar{x})^2, \quad L_{xy} = \sum (x_i - \bar{x})(y_i - \bar{y})$。
* **相关性检验**：可以使用相关系数 $r = \frac{L_{xy}}{\sqrt{L_{xx}L_{yy}}}$ 来检验线性关系是否显著。
