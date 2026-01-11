---
title: 线性代数学习之例题
published: 2026-01-12

description: "一些线代例题，复习用"
updated: 2026-01-12

tags:
  - "线性代数"
  - "复习"
  - "习题"
category: 学习

draft: false
---

## 第 1 章 | 行列式 习题集

### n阶副对角线行列式的计算

**题目**：
计算 $n$ 阶行列式（副对角线以上元素全为0）：
$$
D_n = \begin{vmatrix}
0 & 0 & \cdots & 0 & a_n \\
0 & 0 & \cdots & a_{n-1} & * \\
\vdots & \vdots & \ddots & \vdots & \vdots \\
0 & a_2 & \cdots & * & * \\
a_1 & * & \cdots & * & *
\end{vmatrix}
$$
其中 $a_i \neq 0 \, (i=1, 2, \cdots, n)$，“$*$”表示元素为任意数。

**解析**：
利用行列式性质，将第 $n$ 列交换到第 1 列，第 $n-1$ 列交换到第 2 列……以此类推，将副对角线变为以 $a_1, a_2, \cdots, a_n$ 为主对角线的下三角形行列式。
或者利用递推法（按第1列展开）：
$$
D_n = (-1)^{n+1} a_1 D_{n-1}
$$
其中 $D_{n-1}$ 是去掉第 $n$ 行和第 1 列后的 $n-1$ 阶子行列式（形式与 $D_n$ 相同）。
反复利用递推关系：
$$
\begin{aligned}
D_n &= (-1)^{n+1} a_1 D_{n-1} \\
&= (-1)^{n+1} a_1 \cdot (-1)^{n} a_2 D_{n-2} \\
&= \cdots \\
&= (-1)^{(n+1) + n + \cdots + 2} a_1 a_2 \cdots a_n
\end{aligned}
$$
指数部分求和：$\sum_{k=2}^{n+1} k = \frac{(n+1+2)n}{2} - 1 = \frac{n(n+1)}{2} + n - 1$。
实际上，更常用的结论公式直接利用排列的逆序数或交换次数：
将副对角线翻转到主对角线需要交换 $\frac{n(n-1)}{2}$ 次列（或行）。
**结论**：
$$ D_n = (-1)^{\frac{n(n-1)}{2}} a_1 a_2 \cdots a_n $$

---

### 化三角形法计算数值行列式

**题目**：
计算 4 阶行列式：
$$
D = \begin{vmatrix}
1 & 1 & -1 & 2 \\
-1 & -1 & -4 & 1 \\
2 & 4 & -6 & 1 \\
1 & 2 & 4 & 2
\end{vmatrix}
$$

**解析**：
利用行列式性质5（倍加行），将第一列化为 $(1, 0, 0, 0)^T$ 的形式。

1. $r_2 + r_1$，$r_3 + (-2)r_1$，$r_4 + (-1)r_1$：
    $$
    D = \begin{vmatrix}
    1 & 1 & -1 & 2 \\
    0 & 0 & -5 & 3 \\
    0 & 2 & -4 & -3 \\
    0 & 1 & 5 & 0
    \end{vmatrix}
    $$
2. 观察发现第2行第2列元素为0，为便于计算，交换第2行与第4行 ($r_2 \leftrightarrow r_4$)，注意**变号**：
    $$
    D = - \begin{vmatrix}
    1 & 1 & -1 & 2 \\
    0 & 1 & 5 & 0 \\
    0 & 2 & -4 & -3 \\
    0 & 0 & -5 & 3
    \end{vmatrix}
    $$
3. 继续消元：$r_3 + (-2)r_2$：
    $$
    D = - \begin{vmatrix}
    1 & 1 & -1 & 2 \\
    0 & 1 & 5 & 0 \\
    0 & 0 & -14 & -3 \\
    0 & 0 & -5 & 3
    \end{vmatrix}
    $$
4. 最后一步化为上三角，需消去 $a_{43}$。$r_4 + (-\frac{5}{14})r_3$ (或者提取公因子后计算，此处直接展开计算更简便)：
    按第一列展开降阶，再按新第一列展开：
    $$
    D = - (1 \cdot 1 \cdot \begin{vmatrix} -14 & -3 \\ -5 & 3 \end{vmatrix}) = - (-42 - 15) = 57
    $$

---

### 箭形（三叉型）行列式的计算

**题目**：
设 $xyz \neq 0$，计算行列式：
$$
D = \begin{vmatrix}
1+x & 2 & 3 \\
1 & 2+y & 3 \\
1 & 2 & 3+z
\end{vmatrix}
$$

**解析**：
**方法一（化零法）**：各行元素相近，固定第一行，其余行减去第一行。
$r_2 - r_1, r_3 - r_1$：
$$
D = \begin{vmatrix}
1+x & 2 & 3 \\
-x & y & 0 \\
-x & 0 & z
\end{vmatrix}
$$
依次将第2列的 $\frac{x}{y}$ 倍、第3列的 $\frac{x}{z}$ 倍加到第1列（目的是利用 $y, z$ 消去第一列的 $-x$）：
$$
c_1 + \frac{x}{y}c_2 + \frac{x}{z}c_3 \implies \begin{vmatrix}
1+x + \frac{2x}{y} + \frac{3x}{z} & 2 & 3 \\
0 & y & 0 \\
0 & 0 & z
\end{vmatrix}
$$
这就化为了上三角形行列式，主对角线相乘：
$$
D = (1+x + \frac{2x}{y} + \frac{3x}{z}) \cdot y \cdot z = yz + xyz + 2xz + 3xy
$$

**方法二（分拆法）**：
将各列写成两项之和（如第一列写为 $1+x, 1+0, 1+0$），利用行列式线性性质拆分，最终仅保留非零项（至多一列全为常数列）。
$$
D = xyz + 2xz + 3xy + yz
$$

---

### 行（列）和相等型行列式

**题目**：
计算 $n$ 阶行列式：
$$
D_n = \begin{vmatrix}
x & a & a & \cdots & a \\
a & x & a & \cdots & a \\
a & a & x & \cdots & a \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
a & a & a & \cdots & x
\end{vmatrix}
$$

**解析**：
观察特点：每一行的元素之和相等，均为 $x + (n-1)a$。

1. **加列**：将第 $2, 3, \cdots, n$ 列全部加到第 1 列上。
    $$
    D_n = \begin{vmatrix}
    x+(n-1)a & a & \cdots & a \\
    x+(n-1)a & x & \cdots & a \\
    \vdots & \vdots & \ddots & \vdots \\
    x+(n-1)a & a & \cdots & x
    \end{vmatrix}
    $$
2. **提公因式**：提出第 1 列的公因子 $[x+(n-1)a]$。
    $$
    D_n = [x+(n-1)a] \begin{vmatrix}
    1 & a & \cdots & a \\
    1 & x & \cdots & a \\
    \vdots & \vdots & \ddots & \vdots \\
    1 & a & \cdots & x
    \end{vmatrix}
    $$
3. **化零**：各行减去第一行 ($r_i - r_1$)，化为上三角形。
    $$
    D_n = [x+(n-1)a] \begin{vmatrix}
    1 & a & \cdots & a \\
    0 & x-a & \cdots & 0 \\
    \vdots & \vdots & \ddots & \vdots \\
    0 & 0 & \cdots & x-a
    \end{vmatrix}
    $$
4. **结论**：
    $$ D_n = [x + (n-1)a](x-a)^{n-1} $$

---

### 范德蒙 (Vandermonde) 行列式

**题目**：
计算 $n$ 阶行列式：
$$
V_n = \begin{vmatrix}
1 & 1 & \cdots & 1 \\
x_1 & x_2 & \cdots & x_n \\
x_1^2 & x_2^2 & \cdots & x_n^2 \\
\vdots & \vdots & & \vdots \\
x_1^{n-1} & x_2^{n-1} & \cdots & x_n^{n-1}
\end{vmatrix}
$$

**解析**：
这是著名的范德蒙行列式。
**结论公式**：
$$ V_n = \prod_{1 \le j < i \le n} (x_i - x_j) $$
**记忆方法**：所有下标大的变量减去下标小的变量的连乘积。

**计算示例**：
$$
D = \begin{vmatrix}
1 & 1 & 1 \\
2 & 3 & 4 \\
4 & 9 & 16
\end{vmatrix}
$$
这里 $x_1=2, x_2=3, x_3=4$。
$$
D = (4-3)(4-2)(3-2) = 1 \cdot 2 \cdot 1 = 2
$$

---

### 含参数的齐次线性方程组

**题目**：
问 $\lambda$ 取何值时，下列齐次方程组有**非零解**？
$$
\begin{cases}
(1-\lambda)x_1 - 2x_2 + 4x_3 = 0 \\
2x_1 + (3-\lambda)x_2 + x_3 = 0 \\
x_1 + x_2 + (1-\lambda)x_3 = 0
\end{cases}
$$

**解析**：
根据克莱默法则的推论：**齐次线性方程组有非零解 $\iff$ 系数行列式 $D=0$**。
计算系数行列式：
$$
D = \begin{vmatrix}
1-\lambda & -2 & 4 \\
2 & 3-\lambda & 1 \\
1 & 1 & 1-\lambda
\end{vmatrix}
$$
观察第一列与第三列，或直接计算。
将 $c_2, c_3$ 加到 $c_1$ 似乎不明显，直接按行展开或化简。
利用沙路法或化简：
$r_3 \times (-2) + r_2 \to r_2$, $r_3 \times (\lambda-1) + r_1 \to r_1$ (操作较繁琐)。
直接计算特征多项式（课本例题结果）：
$$
D = - (\lambda - 2)(\lambda - 3)\lambda
$$
令 $D=0$，解得：
$$ \lambda = 0, \quad \lambda = 2, \quad \lambda = 3 $$
当 $\lambda$ 取 0, 2, 3 时，方程组有非零解。

---

### 几何应用——三点共线

**题目**：
求使得平面上三点 $A(x_1, y_1), B(x_2, y_2), C(x_3, y_3)$ 共线的充要条件。

**解析**：
假设三点位于直线 $ax + by + c = 0$ 上（$a, b$ 不同时为0）。
代入坐标得到关于未知数 $a, b, c$ 的齐次线性方程组：
$$
\begin{cases}
x_1 a + y_1 b + c = 0 \\
x_2 a + y_2 b + c = 0 \\
x_3 a + y_3 b + c = 0
\end{cases}
$$
要使 $a, b, c$ 有非零解（即直线存在），其系数行列式必须为 0。
**结论**：
$$
\begin{vmatrix}
x_1 & y_1 & 1 \\
x_2 & y_2 & 1 \\
x_3 & y_3 & 1
\end{vmatrix} = 0
$$
这也是三点共线的行列式判据。

---

## 第 2 章 | 矩阵 习题集

### 矩阵乘法与方阵的幂

**题目**
设 $\alpha = (-1, 1, 3)^T, \beta = (-2, 0, 1)^T$，令 $A = \alpha \beta^T$，求 $A^{100}$。

**解析**
矩阵 $A$ 是由列向量 $\alpha$ 和行向量 $\beta^T$ 相乘得到的 $3 \times 3$ 矩阵。
根据矩阵结合律：
$$
A^{2} = (\alpha \beta^T)(\alpha \beta^T) = \alpha (\beta^T \alpha) \beta^T
$$
注意 $\beta^T \alpha$ 是一个数（标量）：
$$
\beta^T \alpha = (-2, 0, 1) \begin{pmatrix} -1 \\ 1 \\ 3 \end{pmatrix} = (-2)(-1) + 0 + 3 = 5
$$
所以 $A^2 = \alpha (5) \beta^T = 5 (\alpha \beta^T) = 5A$。
递推可得 $A^{100} = 5^{99} A$。

计算 $A = \alpha \beta^T$：
$$
A = \begin{pmatrix} -1 \\ 1 \\ 3 \end{pmatrix} (-2, 0, 1) = \begin{pmatrix} 2 & 0 & -1 \\ -2 & 0 & 1 \\ -6 & 0 & 3 \end{pmatrix}
$$
因此：
$$
A^{100} = 5^{99} \begin{pmatrix} 2 & 0 & -1 \\ -2 & 0 & 1 \\ -6 & 0 & 3 \end{pmatrix}
$$

---

### 利用伴随矩阵求逆(\*一般使用 $(A, I) \rarr (I, A^{-1})$)

**题目**
设 $A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 2 & 1 \\ 3 & 4 & 3 \end{pmatrix}$，求 $A^{-1}$。

**解析**
首先计算行列式 $|A|$：
$$
|A| = 1(6-4) - 2(6-3) + 3(8-6) = 2 - 6 + 6 = 2 \neq 0
$$
故 $A$ 可逆。计算各元素的代数余子式：
$$
\begin{aligned}
A_{11} &= \begin{vmatrix} 2 & 1 \\ 4 & 3 \end{vmatrix} = 2, & A_{12} &= -\begin{vmatrix} 2 & 1 \\ 3 & 3 \end{vmatrix} = -3, & A_{13} &= \begin{vmatrix} 2 & 2 \\ 3 & 4 \end{vmatrix} = 2 \\
A_{21} &= -\begin{vmatrix} 2 & 3 \\ 4 & 3 \end{vmatrix} = 6, & A_{22} &= \begin{vmatrix} 1 & 3 \\ 3 & 3 \end{vmatrix} = -6, & A_{23} &= -\begin{vmatrix} 1 & 2 \\ 3 & 4 \end{vmatrix} = 2 \\
A_{31} &= \begin{vmatrix} 2 & 3 \\ 2 & 1 \end{vmatrix} = -4, & A_{32} &= -\begin{vmatrix} 1 & 3 \\ 2 & 1 \end{vmatrix} = 5, & A_{33} &= \begin{vmatrix} 1 & 2 \\ 2 & 2 \end{vmatrix} = -2
\end{aligned}
$$
写出伴随矩阵 $A^*$（**注意下标转置**）：
$$
A^* = \begin{pmatrix} A_{11} & A_{21} & A_{31} \\ A_{12} & A_{22} & A_{32} \\ A_{13} & A_{23} & A_{33} \end{pmatrix} = \begin{pmatrix} 2 & 6 & -4 \\ -3 & -6 & 5 \\ 2 & 2 & -2 \end{pmatrix}
$$
利用公式 $A^{-1} = \frac{1}{|A|} A^*$：
$$
A^{-1} = \frac{1}{2} \begin{pmatrix} 2 & 6 & -4 \\ -3 & -6 & 5 \\ 2 & 2 & -2 \end{pmatrix} = \begin{pmatrix} 1 & 3 & -2 \\ -1.5 & -3 & 2.5 \\ 1 & 1 & -1 \end{pmatrix}
$$

---

### 解矩阵方程

**题目**
已知 $AX - B = -X$，求矩阵 $X$。其中
$$
A = \begin{pmatrix} 0 & 1 & 0 \\ -1 & 1 & 1 \\ -1 & 0 & -1 \end{pmatrix}, \quad B = \begin{pmatrix} 1 & -1 \\ 2 & 0 \\ 5 & -3 \end{pmatrix}
$$

**解析**
整理方程得 $(A+I)X = B$。
记 $C = A+I$，则
$$
C = \begin{pmatrix} 1 & 1 & 0 \\ -1 & 2 & 1 \\ -1 & 0 & 0 \end{pmatrix}
$$
若 $C$ 可逆，则 $X = C^{-1}B$。构造增广矩阵 $(C | B)$，利用初等行变换求逆并相乘（或直接求解）：
$$
(C | B) = \left( \begin{array}{ccc|cc}
1 & 1 & 0 & 1 & -1 \\
-1 & 2 & 1 & 2 & 0 \\
-1 & 0 & 0 & 5 & -3
\end{array} \right)
$$
$$
\xrightarrow{r_2+r_1, r_3+r_1} \left( \begin{array}{ccc|cc}
1 & 1 & 0 & 1 & -1 \\
0 & 3 & 1 & 3 & -1 \\
0 & 1 & 0 & 6 & -4
\end{array} \right)
$$
$$
\xrightarrow{r_2 \leftrightarrow r_3} \left( \begin{array}{ccc|cc}
1 & 1 & 0 & 1 & -1 \\
0 & 1 & 0 & 6 & -4 \\
0 & 3 & 1 & 3 & -1
\end{array} \right)
$$
$$
\xrightarrow{r_3-3r_2, r_1-r_2} \left( \begin{array}{ccc|cc}
1 & 0 & 0 & -5 & 3 \\
0 & 1 & 0 & 6 & -4 \\
0 & 0 & 1 & -15 & 11
\end{array} \right)
$$
左侧已化为单位矩阵，故右侧即为 $X$：
$$
X = \begin{pmatrix} -5 & 3 \\ 6 & -4 \\ -15 & 11 \end{pmatrix}
$$

---

### 利用逆矩阵性质证明

**题目**
设方阵 $A$ 满足 $A^2 - 3A - 10I = 0$，证明 $A-4I$ 可逆，并求其逆矩阵。

**解析**
由 $A^2 - 3A - 10I = 0$ 出发，我们需要凑出含有 $(A-4I)$ 的因式。
将原式变形：
$$
A^2 - 4A + A - 4I - 6I = 0 \implies A(A-4I) + (A-4I) = 6I
$$
提取公因子 $(A-4I)$：
$$
(A+I)(A-4I) = 6I
$$
即：
$$
(A-4I) \left[ \frac{1}{6}(A+I) \right] = I
$$
根据可逆矩阵定义 $AB=I \implies A$ 可逆且 $A^{-1}=B$，得 $A-4I$ 可逆，且
$$
(A-4I)^{-1} = \frac{1}{6}(A+I)
$$

---

### 分块矩阵的运算与求逆

**题目**
设 $A = \begin{pmatrix} 0 & 0 & 5 \\ 3 & 1 & 0 \\ 2 & 1 & 0 \end{pmatrix}$，利用分块矩阵的方法求 $A^{-1}$。

**解析**
观察矩阵 $A$ 的结构，可将其划分为副对角线形式的分块矩阵：
$$
A = \left( \begin{array}{cc|c}
0 & 0 & 5 \\
\hline
3 & 1 & 0 \\
2 & 1 & 0
\end{array} \right) = \begin{pmatrix} O & B \\ C & O \end{pmatrix}
$$
其中 $B = (5)$，$C = \begin{pmatrix} 3 & 1 \\ 2 & 1 \end{pmatrix}$。
**注意**：这里实际上是把 $A$ 看作 $\begin{pmatrix} A_{11} & A_{12} \\ A_{21} & A_{22} \end{pmatrix}$，其中 $A_{11}$ 是 $1\times 2$ 的零矩阵，$A_{22}$ 是 $2\times 1$ 的零矩阵，$A_{12}=(5)$，$A_{21}=C$。
利用副对角线分块矩阵的逆矩阵公式（需注意行列分块对应关系）：
对于形式 $\begin{pmatrix} O & B_{m \times n} \\ C_{n \times m} & O \end{pmatrix}$，其逆为 $\begin{pmatrix} O & C^{-1} \\ B^{-1} & O \end{pmatrix}$。
在此题中：

1. $B = (5) \implies B^{-1} = (1/5)$。
2. $C = \begin{pmatrix} 3 & 1 \\ 2 & 1 \end{pmatrix}$， $|C| = 1 \neq 0$，则 $C^{-1} = \begin{pmatrix} 1 & -1 \\ -2 & 3 \end{pmatrix}$。

代入公式：
$$
A^{-1} = \begin{pmatrix} O & C^{-1} \\ B^{-1} & O \end{pmatrix} = \left( \begin{array}{cc|c}
0 & 0 & 1 & -1 \\
0 & 0 & -2 & 3 \\
\hline
1/5 & 0 & 0 & 0
\end{array} \right)
$$
（注：这里列的分块需适应 $A^{-1}$ 的维度，即第一列块宽为2，第二列块宽为1）
即：
$$
A^{-1} = \begin{pmatrix} 0 & 0 & 1 & -1 \\ 0 & 0 & -2 & 3 \\ 1/5 & 0 & 0 & 0 \end{pmatrix}
$$
**注**：为验证准确性，可以手动乘一下 $A A^{-1}$ 是否为 $I$。此处套用公式需谨慎分块维度，更稳妥的方法是设未知矩阵块 $X, Y, Z, W$ 求解方程组。

---

### 初等变换与矩阵秩的性质

**题目**
设 $A$ 为 $m \times n$ 矩阵，证明：$r(A) = r(A^T A)$。

**解析**
证明思路：通过齐次线性方程组同解来证明。
考虑齐次线性方程组 $Ax=0$ 和 $A^T Ax=0$。

1. 若 $x$ 满足 $Ax=0$，则两边左乘 $A^T$ 得 $A^T Ax = 0$。即 $Ax=0$ 的解一定是 $A^T Ax=0$ 的解。
2. 若 $x$ 满足 $A^T Ax=0$，则两边左乘 $x^T$ 得 $x^T A^T A x = 0$，即 $(Ax)^T (Ax) = 0$。
    令 $y = Ax$，则 $y^T y = \sum y_i^2 = 0$，故 $y=0$，即 $Ax=0$。
    说明 $A^T Ax=0$ 的解也一定是 $Ax=0$ 的解。

综上，$Ax=0$ 与 $A^T Ax=0$ 是同解方程组。
根据解的结构定理，解空间维数 $n - r(A) = n - r(A^T A)$。
所以 $r(A) = r(A^T A)$。

---

## 第 3 章 | 线性方程组 习题集

### 向量组的线性相关性与极大线性无关组

**题目**
设向量组 $\alpha_1 = (1, 1, 0, 0)^T, \alpha_2 = (1, 2, 1, 1)^T, \alpha_3 = (0, 1, 1, 1)^T, \alpha_4 = (1, 3, 2, 1)^T, \alpha_5 = (2, 6, 4, 1)^T$。
(1) 求该向量组的秩及一个极大线性无关组；
(2) 将其余向量用该极大线性无关组线性表示。

**解析**
(1) 将向量组按列构成矩阵 $A = (\alpha_1, \alpha_2, \alpha_3, \alpha_4, \alpha_5)$，并对其进行初等行变换化为行简化阶梯形矩阵。
$$
A = \begin{pmatrix}
1 & 1 & 0 & 1 & 2 \\
1 & 2 & 1 & 3 & 6 \\
0 & 1 & 1 & 2 & 4 \\
0 & 1 & 1 & 1 & 1
\end{pmatrix}
\xrightarrow{r_2-r_1}
\begin{pmatrix}
1 & 1 & 0 & 1 & 2 \\
0 & 1 & 1 & 2 & 4 \\
0 & 1 & 1 & 2 & 4 \\
0 & 1 & 1 & 1 & 1
\end{pmatrix}
$$
$$
\xrightarrow{r_3-r_2, r_4-r_2}
\begin{pmatrix}
1 & 1 & 0 & 1 & 2 \\
0 & 1 & 1 & 2 & 4 \\
0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & -1 & -3
\end{pmatrix}
\xrightarrow{r_3 \leftrightarrow r_4, r_3 \times (-1)}
\begin{pmatrix}
1 & 1 & 0 & 1 & 2 \\
0 & 1 & 1 & 2 & 4 \\
0 & 0 & 0 & 1 & 3 \\
0 & 0 & 0 & 0 & 0
\end{pmatrix}
$$
继续化为行简化阶梯形：
$$
\xrightarrow{r_2-2r_3, r_1-r_3}
\begin{pmatrix}
1 & 1 & 0 & 0 & -1 \\
0 & 1 & 1 & 0 & -2 \\
0 & 0 & 0 & 1 & 3 \\
0 & 0 & 0 & 0 & 0
\end{pmatrix}
\xrightarrow{r_1-r_2}
\begin{pmatrix}
1 & 0 & -1 & 0 & 1 \\
0 & 1 & 1 & 0 & -2 \\
0 & 0 & 0 & 1 & 3 \\
0 & 0 & 0 & 0 & 0
\end{pmatrix}
$$
由行简化阶梯形可知，矩阵的秩为 3，且第 1, 2, 4 列为主列。
故向量组的秩为 3，一个极大线性无关组为 $\alpha_1, \alpha_2, \alpha_4$。

(2) 根据行简化阶梯形对应的线性方程组关系，可直接写出表示式：
对于第 3 列（对应 $\alpha_3$），有 $(-1, 1, 0)^T$ 对应主元位置，即：
$$ \alpha_3 = -\alpha_1 + \alpha_2 $$
对于第 5 列（对应 $\alpha_5$），有 $(1, -2, 3)^T$ 对应主元位置，即：
$$ \alpha_5 = \alpha_1 - 2\alpha_2 + 3\alpha_4 $$

---

**题目**
证明：若向量组 $\alpha_1, \alpha_2, \alpha_3$ 线性无关，则向量组 $\beta_1 = \alpha_1, \beta_2 = \alpha_1 + \alpha_2, \beta_3 = \alpha_1 + \alpha_2 + \alpha_3$ 也线性无关。

**解析**
设有数 $k_1, k_2, k_3$ 使得
$$ k_1\beta_1 + k_2\beta_2 + k_3\beta_3 = 0 $$
代入 $\beta_1, \beta_2, \beta_3$ 的表达式：
$$ k_1\alpha_1 + k_2(\alpha_1 + \alpha_2) + k_3(\alpha_1 + \alpha_2 + \alpha_3) = 0 $$
整理得：
$$ (k_1 + k_2 + k_3)\alpha_1 + (k_2 + k_3)\alpha_2 + k_3\alpha_3 = 0 $$
因为 $\alpha_1, \alpha_2, \alpha_3$ 线性无关，故其线性组合为零时系数必全为零，即：
$$
\begin{cases}
k_1 + k_2 + k_3 = 0 \\
k_2 + k_3 = 0 \\
k_3 = 0
\end{cases}
$$
解此方程组，易得 $k_3 = 0 \Rightarrow k_2 = 0 \Rightarrow k_1 = 0$。
因为 $k_1, k_2, k_3$ 必全为零，所以向量组 $\beta_1, \beta_2, \beta_3$ 线性无关。

---

### 利用高斯消元法求解齐次线性方程组

**题目**
求齐次线性方程组 $Ax=0$ 的基础解系与通解，其中
$$
A = \begin{pmatrix}
1 & 1 & 1 & 1 \\
2 & 4 & 3 & 1 \\
-1 & -2 & 1 & 3 \\
0 & 0 & 2 & 4
\end{pmatrix}
$$

**解析**
对系数矩阵 $A$ 进行初等行变换化为行简化阶梯形矩阵。
$$
A \xrightarrow{r_2-2r_1, r_3+r_1}
\begin{pmatrix}
1 & 1 & 1 & 1 \\
0 & 2 & 1 & -1 \\
0 & -1 & 2 & 4 \\
0 & 0 & 2 & 4
\end{pmatrix}
\xrightarrow{r_2 \leftrightarrow r_3, r_2 \times (-1)}
\begin{pmatrix}
1 & 1 & 1 & 1 \\
0 & 1 & -2 & -4 \\
0 & 2 & 1 & -1 \\
0 & 0 & 1 & 2
\end{pmatrix}
$$
$$
\xrightarrow{r_3-2r_2}
\begin{pmatrix}
1 & 1 & 1 & 1 \\
0 & 1 & -2 & -4 \\
0 & 0 & 5 & 7 \\
0 & 0 & 1 & 2
\end{pmatrix}
\xrightarrow{r_3 \leftrightarrow r_4}
\begin{pmatrix}
1 & 1 & 1 & 1 \\
0 & 1 & -2 & -4 \\
0 & 0 & 1 & 2 \\
0 & 0 & 5 & 7
\end{pmatrix}
$$
$$
\xrightarrow{r_4-5r_3}
\begin{pmatrix}
1 & 1 & 1 & 1 \\
0 & 1 & -2 & -4 \\
0 & 0 & 1 & 2 \\
0 & 0 & 0 & -3
\end{pmatrix}
$$
观察阶梯形矩阵，可知 $r(A)=4$，而未知数个数 $n=4$。
因为 $r(A) = n$，所以方程组只有零解。
**通解**：
$$ x = \begin{pmatrix} 0 \\ 0 \\ 0 \\ 0 \end{pmatrix} $$

---

**题目**
求齐次线性方程组 $Ax=0$ 的通解，其中
$$
A = \begin{pmatrix}
1 & 2 & 1 & 1 & 1 \\
2 & 4 & 3 & 1 & 1 \\
-1 & -2 & 1 & 3 & -3 \\
0 & 0 & 2 & 4 & -2
\end{pmatrix}
$$

**解析**
对系数矩阵 $A$ 进行初等行变换。
$$
A \xrightarrow{r_2-2r_1, r_3+r_1}
\begin{pmatrix}
1 & 2 & 1 & 1 & 1 \\
0 & 0 & 1 & -1 & -1 \\
0 & 0 & 2 & 4 & -2 \\
0 & 0 & 2 & 4 & -2
\end{pmatrix}
\xrightarrow{r_3-2r_2, r_4-r_3}
\begin{pmatrix}
1 & 2 & 1 & 1 & 1 \\
0 & 0 & 1 & -1 & -1 \\
0 & 0 & 0 & 6 & 0 \\
0 & 0 & 0 & 0 & 0
\end{pmatrix}
$$
继续化为行简化阶梯形：
$$
\xrightarrow{r_3 \div 6}
\begin{pmatrix}
1 & 2 & 1 & 1 & 1 \\
0 & 0 & 1 & -1 & -1 \\
0 & 0 & 0 & 1 & 0 \\
0 & 0 & 0 & 0 & 0
\end{pmatrix}
\xrightarrow{r_2+r_3, r_1-r_3}
\begin{pmatrix}
1 & 2 & 1 & 0 & 1 \\
0 & 0 & 1 & 0 & -1 \\
0 & 0 & 0 & 1 & 0 \\
0 & 0 & 0 & 0 & 0
\end{pmatrix}
\xrightarrow{r_1-r_2}
\begin{pmatrix}
1 & 2 & 0 & 0 & 2 \\
0 & 0 & 1 & 0 & -1 \\
0 & 0 & 0 & 1 & 0 \\
0 & 0 & 0 & 0 & 0
\end{pmatrix}
$$
确定主变量为 $x_1, x_3, x_4$，自由变量为 $x_2, x_5$。
同解方程组为：
$$
\begin{cases}
x_1 = -2x_2 - 2x_5 \\
x_3 = x_5 \\
x_4 = 0
\end{cases}
$$
(1) 取自由变量 $\begin{pmatrix} x_2 \\ x_5 \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$，得基础解系 $\xi_1 = (-2, 1, 0, 0, 0)^T$；
(2) 取自由变量 $\begin{pmatrix} x_2 \\ x_5 \end{pmatrix} = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$，得基础解系 $\xi_2 = (-2, 0, 1, 0, 1)^T$。

**通解**：
$$ x = k_1 \xi_1 + k_2 \xi_2 = k_1 \begin{pmatrix} -2 \\ 1 \\ 0 \\ 0 \\ 0 \end{pmatrix} + k_2 \begin{pmatrix} -2 \\ 0 \\ 1 \\ 0 \\ 1 \end{pmatrix} \quad (k_1, k_2 \text{为任意常数}) $$

---

### 利用高斯消元法求解非齐次线性方程组

**题目**
设非齐次线性方程组的增广矩阵为
$$
(A, b) = \left( \begin{array}{ccccc|c}
1 & 1 & 1 & 0 & 0 & 0 \\
1 & 1 & -1 & -1 & -2 & 1 \\
2 & 2 & 0 & -1 & -2 & 1 \\
5 & 5 & -3 & -4 & -8 & 4
\end{array} \right)
$$
求方程组 $Ax=b$ 的一般解。

**解析**
对增广矩阵 $(A, b)$ 进行初等行变换。
$$
(A, b) \xrightarrow{r_2-r_1, r_3-2r_1, r_4-5r_1}
\left( \begin{array}{ccccc|c}
1 & 1 & 1 & 0 & 0 & 0 \\
0 & 0 & -2 & -1 & -2 & 1 \\
0 & 0 & -2 & -1 & -2 & 1 \\
0 & 0 & -8 & -4 & -8 & 4
\end{array} \right)
$$
$$
\xrightarrow{r_3-r_2, r_4-4r_2}
\left( \begin{array}{ccccc|c}
1 & 1 & 1 & 0 & 0 & 0 \\
0 & 0 & -2 & -1 & -2 & 1 \\
0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0
\end{array} \right)
$$
$$
\xrightarrow{r_2 \div (-1), r_1 - \frac{1}{2}r_2} \dots \xrightarrow{\text{化简至行简化}}
\left( \begin{array}{ccccc|c}
1 & 1 & 0 & -1/2 & -1 & 1/2 \\
0 & 0 & 1 & 1/2 & 1 & -1/2 \\
0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0
\end{array} \right)
$$
由此可知 $r(A) = r(A, b) = 2 < 5$，方程组有无穷多解。
主变量为 $x_1, x_3$，自由变量为 $x_2, x_4, x_5$。
同解方程组为：
$$
\begin{cases}
x_1 = -x_2 + \frac{1}{2}x_4 + x_5 + \frac{1}{2} \\
x_3 = -\frac{1}{2}x_4 - x_5 - \frac{1}{2}
\end{cases}
$$

**1. 求特解 $\eta$**：
令自由变量 $x_2=x_4=x_5=0$，得 $x_1 = \frac{1}{2}, x_3 = -\frac{1}{2}$。
$$ \eta = \left( \frac{1}{2}, 0, -\frac{1}{2}, 0, 0 \right)^T $$

**2. 求导出组 $Ax=0$ 的基础解系**：
令 $\begin{pmatrix} x_2 \\ x_4 \\ x_5 \end{pmatrix}$ 分别为 $\begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}, \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$，解得：
$$
\xi_1 = \begin{pmatrix} -1 \\ 1 \\ 0 \\ 0 \\ 0 \end{pmatrix}, \quad
\xi_2 = \begin{pmatrix} 1/2 \\ 0 \\ -1/2 \\ 1 \\ 0 \end{pmatrix}, \quad
\xi_3 = \begin{pmatrix} 1 \\ 0 \\ -1 \\ 0 \\ 1 \end{pmatrix}
$$
为消除分数，可取 $\xi_2 = (1, 0, -1, 2, 0)^T$。

**通解**：
$$
x = \eta + k_1\xi_1 + k_2\xi_2 + k_3\xi_3 =
\begin{pmatrix} 1/2 \\ 0 \\ -1/2 \\ 0 \\ 0 \end{pmatrix} + k_1 \begin{pmatrix} -1 \\ 1 \\ 0 \\ 0 \\ 0 \end{pmatrix} + k_2 \begin{pmatrix} 1 \\ 0 \\ -1 \\ 2 \\ 0 \end{pmatrix} + k_3 \begin{pmatrix} 1 \\ 0 \\ -1 \\ 0 \\ 1 \end{pmatrix}
$$
（其中 $k_1, k_2, k_3$ 为任意常数）

---

### 线性方程组解的结构与判定

**题目**
设4元非齐次线性方程组 $Ax=b$，已知秩 $r(A)=3$，且 $\alpha_1, \alpha_2, \alpha_3$ 是 $Ax=b$ 的解，其中
$$
\alpha_1 = \begin{pmatrix} 4 \\ -1 \\ 0 \\ 3 \end{pmatrix}, \quad \alpha_2 + 2\alpha_3 = \begin{pmatrix} 3 \\ 0 \\ -3 \\ 6 \end{pmatrix}
$$
求 $Ax=b$ 的一般解。

**解析**
(1) **确定基础解系所含向量个数**：

因为 $n=4$，且 $r(A)=3$，所以基础解系所含向量个数为 $n - r(A) = 4 - 3 = 1$。

即 $Ax=0$ 的基础解系由 1 个线性无关的解向量组成。

(2) **求 $Ax=0$ 的一个非零解**：

利用非齐次方程组解的性质：若 $\alpha, \beta$ 是 $Ax=b$ 的解，则 $\alpha - \beta$ 是 $Ax=0$ 的解。

已知 $A\alpha_1 = b$，且 $A(\alpha_2) = b, A(\alpha_3) = b$。

由线性性质，$A(\alpha_2 + 2\alpha_3) = A\alpha_2 + 2A\alpha_3 = b + 2b = 3b$。

同时 $A(3\alpha_1) = 3A\alpha_1 = 3b$。

故 $3\alpha_1$ 与 $(\alpha_2 + 2\alpha_3)$ 都是方程组 $Ax=3b$ 的解。

它们的差即为导出组 $Ax=0$ 的解：
$$
\xi = 3\alpha_1 - (\alpha_2 + 2\alpha_3) = 3 \begin{pmatrix} 4 \\ -1 \\ 0 \\ 3 \end{pmatrix} - \begin{pmatrix} 3 \\ 0 \\ -3 \\ 6 \end{pmatrix} = \begin{pmatrix} 12 \\ -3 \\ 0 \\ 9 \end{pmatrix} - \begin{pmatrix} 3 \\ 0 \\ -3 \\ 6 \end{pmatrix} = \begin{pmatrix} 9 \\ -3 \\ 3 \\ 3 \end{pmatrix}
$$
可取简化后的 $\xi = (3, -1, 1, 1)^T$ 作为基础解系。

(3) **写出一般解**：
通解 = 特解 + 基础解系的线性组合。
取 $\alpha_1$ 为特解。
$$
x = \alpha_1 + k\xi = \begin{pmatrix} 4 \\ -1 \\ 0 \\ 3 \end{pmatrix} + k \begin{pmatrix} 3 \\ -1 \\ 1 \\ 1 \end{pmatrix} \quad (k\text{为任意常数})
$$

---

**题目**
设 $A$ 为 $m \times n$ 实矩阵，证明：$r(A^T A) = r(A)$。

**解析**
要证 $r(A^T A) = r(A)$，只需证明齐次线性方程组 $Ax=0$ 与 $A^T Ax=0$ 同解。

(1) 设 $x$ 是 $Ax=0$ 的解，即 $Ax=0$。
两边左乘 $A^T$，得 $A^T(Ax) = A^T 0 = 0$，即 $A^T A x = 0$。

所以 $x$ 也是 $A^T A x = 0$ 的解。

即：$Ax=0$ 的解 $\subseteq$ $A^T Ax=0$ 的解。

(2) 设 $x$ 是 $A^T Ax=0$ 的解，即 $A^T Ax = 0$。

两边左乘 $x^T$，得 $x^T A^T A x = 0$。

即 $(Ax)^T (Ax) = 0$。

设向量 $y = Ax$，则 $y^T y = \sum y_i^2 = 0$。

因为 $y$ 为实向量，故 $y=0$，即 $Ax=0$。

所以 $x$ 也是 $Ax=0$ 的解。

即：$A^T Ax=0$ 的解 $\subseteq$ $Ax=0$ 的解。

综上所述，方程组 $Ax=0$ 与 $A^T Ax=0$ 同解。

根据解的结构定理，其解空间的维数相同，即 $n - r(A) = n - r(A^T A)$。

故 $r(A) = r(A^T A)$。

---

## 第 4 章 | 向量空间与线性变换 习题集

### 基、坐标与过渡矩阵

**题目**
设 $\mathbb{R}^3$ 的一组基 $\mathcal{B}: \beta_1, \beta_2, \beta_3$，其中
$$
\beta_1 = \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix}, \quad \beta_2 = \begin{pmatrix} 0 \\ 1 \\ -1 \end{pmatrix}, \quad \beta_3 = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}
$$
求向量 $\alpha = \begin{pmatrix} a_1 \\ a_2 \\ a_3 \end{pmatrix}$ 在基 $\mathcal{B}$ 下的坐标。

**解析**
设向量 $\alpha$ 在基 $\mathcal{B}$ 下的坐标为 $x = (x_1, x_2, x_3)^T$。

根据坐标定义，有：
$$
\alpha = x_1 \beta_1 + x_2 \beta_2 + x_3 \beta_3 = (\beta_1, \beta_2, \beta_3) \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix}
$$

代入向量的具体数值，得到线性方程组（矩阵形式）：
$$
\begin{pmatrix} 1 & 0 & 0 \\ -1 & 1 & 0 \\ 0 & -1 & 1 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix} = \begin{pmatrix} a_1 \\ a_2 \\ a_3 \end{pmatrix}
$$

对增广矩阵进行初等行变换求解：
$$
\left( \begin{array}{ccc|c}
1 & 0 & 0 & a_1 \\
-1 & 1 & 0 & a_2 \\
0 & -1 & 1 & a_3
\end{array} \right)
\xrightarrow{r_2+r_1}
\left( \begin{array}{ccc|c}
1 & 0 & 0 & a_1 \\
0 & 1 & 0 & a_1 + a_2 \\
0 & -1 & 1 & a_3
\end{array} \right)
$$

$$
\xrightarrow{r_3+r_2}
\left( \begin{array}{ccc|c}
1 & 0 & 0 & a_1 \\
0 & 1 & 0 & a_1 + a_2 \\
0 & 0 & 1 & a_1 + a_2 + a_3
\end{array} \right)
$$

于是解得：
$$
\begin{cases}
x_1 = a_1 \\
x_2 = a_1 + a_2 \\
x_3 = a_1 + a_2 + a_3
\end{cases}
$$

所以向量 $\alpha$ 在基 $\mathcal{B}$ 下的坐标为 $(a_1, a_1+a_2, a_1+a_2+a_3)^T$。

---

**题目**
已知 $\mathbb{R}^3$ 的两组基：
旧基 $\mathcal{B}_1: \alpha_1 = (1, 1, 1)^T, \alpha_2 = (0, 1, 1)^T, \alpha_3 = (0, 0, 1)^T$；
新基 $\mathcal{B}_2: \beta_1 = (1, 0, 1)^T, \beta_2 = (0, 1, -1)^T, \beta_3 = (1, 2, 0)^T$。

(1) 求基 $\mathcal{B}_1$ 到基 $\mathcal{B}_2$ 的过渡矩阵 $A$；

(2) 已知向量 $\alpha$ 在基 $\mathcal{B}_1$ 下的坐标为 $(1, -2, -1)^T$，求 $\alpha$ 在基 $\mathcal{B}_2$ 下的坐标。

**解析**
**(1) 求过渡矩阵 $A$**

根据定义，过渡矩阵 $A$ 满足 $(\beta_1, \beta_2, \beta_3) = (\alpha_1, \alpha_2, \alpha_3) A$。

即需解矩阵方程 $B = CA$，其中 $B=(\beta_1, \beta_2, \beta_3), C=(\alpha_1, \alpha_2, \alpha_3)$。

则 $A = C^{-1}B$。

构造增广矩阵 $(C, B)$，利用初等行变换将 $C$ 化为单位矩阵 $I$：
$$
(C, B) = \left( \begin{array}{ccc|ccc}
1 & 0 & 0 & 1 & 0 & 1 \\
1 & 1 & 0 & 0 & 1 & 2 \\
1 & 1 & 1 & 1 & -1 & 0
\end{array} \right)
$$

$$
\xrightarrow{r_2-r_1, r_3-r_1}
\left( \begin{array}{ccc|ccc}
1 & 0 & 0 & 1 & 0 & 1 \\
0 & 1 & 0 & -1 & 1 & 1 \\
0 & 1 & 1 & 0 & -1 & -1
\end{array} \right)
$$

$$
\xrightarrow{r_3-r_2}
\left( \begin{array}{ccc|ccc}
1 & 0 & 0 & 1 & 0 & 1 \\
0 & 1 & 0 & -1 & 1 & 1 \\
0 & 0 & 1 & 1 & -2 & -2
\end{array} \right)
$$

所以过渡矩阵为：
$$
A = \begin{pmatrix} 1 & 0 & 1 \\ -1 & 1 & 1 \\ 1 & -2 & -2 \end{pmatrix}
$$

**(2) 求新坐标 $y$**

设 $\alpha$ 在 $\mathcal{B}_1$ 下坐标为 $x = (1, -2, -1)^T$，在 $\mathcal{B}_2$ 下坐标为 $y$。

根据坐标变换公式 $x = Ay$，即 $y = A^{-1}x$。

我们需要解线性方程组 $Ay = x$：
$$
\left( \begin{array}{ccc|c}
1 & 0 & 1 & 1 \\
-1 & 1 & 1 & -2 \\
1 & -2 & -2 & -1
\end{array} \right)
\xrightarrow{r_2+r_1, r_3-r_1}
\left( \begin{array}{ccc|c}
1 & 0 & 1 & 1 \\
0 & 1 & 2 & -1 \\
0 & -2 & -3 & -2
\end{array} \right)
$$

$$
\xrightarrow{r_3+2r_2}
\left( \begin{array}{ccc|c}
1 & 0 & 1 & 1 \\
0 & 1 & 2 & -1 \\
0 & 0 & 1 & -4
\end{array} \right)
$$

回代求解：
$y_3 = -4$；
$y_2 + 2(-4) = -1 \Rightarrow y_2 = 7$；
$y_1 + (-4) = 1 \Rightarrow y_1 = 5$。

所以 $\alpha$ 在基 $\mathcal{B}_2$ 下的坐标为 $(5, 7, -4)^T$。

---

### 内积与施密特正交化

**题目**
设 $\alpha = (1, 2, k_1)^T, \beta = (-2, k_2, 1)^T, \gamma = (-3k_3, -1, 1)^T$ 是实对称矩阵 $A$ 分别对应于特征值 $1, -1, 3$ 的特征向量。

(1) 求 $k_1, k_2, k_3$；
(2) 将 $\alpha, \beta, \gamma$ 单位化。

**解析**
**(1) 求参数**

根据实对称矩阵的性质（定理 5.11，回顾）：实对称矩阵对应于不同特征值的特征向量是**正交**的。
即 $(\alpha, \beta) = 0, (\beta, \gamma) = 0, (\gamma, \alpha) = 0$。

由 $(\alpha, \beta) = 1 \times (-2) + 2 \times k_2 + k_1 \times 1 = -2 + 2k_2 + k_1 = 0$；

由 $(\beta, \gamma) = -2 \times (-3k_3) + k_2 \times (-1) + 1 \times 1 = 6k_3 - k_2 + 1 = 0$；

由 $(\gamma, \alpha) = -3k_3 \times 1 + (-1) \times 2 + 1 \times k_1 = -3k_3 - 2 + k_1 = 0$。

联立方程组：
$$
\begin{cases}
k_1 + 2k_2 = 2 \\
-k_2 + 6k_3 = -1 \\
k_1 - 3k_3 = 2
\end{cases}
$$

解得：$k_1 = 8, k_2 = -3, k_3 = 2$。
此时向量为：
$\alpha = (1, 2, 8)^T$
$\beta = (-2, -3, 1)^T$
$\gamma = (-6, -1, 1)^T$

**(2) 单位化**

计算向量长度：
$$
\|\alpha\| = \sqrt{1^2 + 2^2 + 8^2} = \sqrt{1 + 4 + 64} = \sqrt{69}
$$
$$
\|\beta\| = \sqrt{(-2)^2 + (-3)^2 + 1^2} = \sqrt{4 + 9 + 1} = \sqrt{14}
$$
$$
\|\gamma\| = \sqrt{(-6)^2 + (-1)^2 + 1^2} = \sqrt{36 + 1 + 1} = \sqrt{38}
$$

单位化后的向量（标准正交基）：
$$
\eta_1 = \frac{1}{\sqrt{69}}(1, 2, 8)^T, \quad \eta_2 = \frac{1}{\sqrt{14}}(-2, -3, 1)^T, \quad \eta_3 = \frac{1}{\sqrt{38}}(-6, -1, 1)^T
$$

---

**题目**
已知 $\mathbb{R}^3$ 的一组基 $\mathcal{B} = \{\alpha_1, \alpha_2, \alpha_3\}$，其中
$$
\alpha_1 = \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix}, \quad \alpha_2 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}, \quad \alpha_3 = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}
$$
试用施密特正交化方法，由 $\mathcal{B}$ 构造 $\mathbb{R}^3$ 的一组标准正交基。

**解析**
**第一步：正交化**

1. 令 $\beta_1 = \alpha_1 = (1, -1, 0)^T$。

2. 令 $\beta_2 = \alpha_2 - \frac{(\alpha_2, \beta_1)}{(\beta_1, \beta_1)} \beta_1$。
    计算内积：
    $(\alpha_2, \beta_1) = 1\times1 + 0\times(-1) + 1\times0 = 1$
    $(\beta_1, \beta_1) = 1^2 + (-1)^2 + 0^2 = 2$
    所以：
    $$
    \beta_2 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} - \frac{1}{2} \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix} = \begin{pmatrix} 1/2 \\ 1/2 \\ 1 \end{pmatrix}
    $$
    为方便计算，取 $\beta_2' = 2\beta_2 = (1, 1, 2)^T$。（注意：正交化过程中，方向比长度重要，取倍数不影响正交性，最后统一单位化即可。但在标准公式中通常保留分数，这里为了计算简便取倍数，后续计算需以 $\beta_2'$ 为准）。
    令 $\beta_2 = (1, 1, 2)^T$。

3. 令 $\beta_3 = \alpha_3 - \frac{(\alpha_3, \beta_1)}{(\beta_1, \beta_1)} \beta_1 - \frac{(\alpha_3, \beta_2)}{(\beta_2, \beta_2)} \beta_2$。
    计算内积：
    $(\alpha_3, \beta_1) = 1\times1 + 1\times(-1) + 1\times0 = 0$ （说明 $\alpha_3$ 已经与 $\beta_1$ 正交）
    $(\alpha_3, \beta_2) = 1\times1 + 1\times1 + 1\times2 = 4$
    $(\beta_2, \beta_2) = 1^2 + 1^2 + 2^2 = 6$
    所以：
    $$
    \beta_3 = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} - 0 \cdot \beta_1 - \frac{4}{6} \begin{pmatrix} 1 \\ 1 \\ 2 \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} - \begin{pmatrix} 2/3 \\ 2/3 \\ 4/3 \end{pmatrix} = \begin{pmatrix} 1/3 \\ 1/3 \\ -1/3 \end{pmatrix}
    $$
    取 $\beta_3 = (1, 1, -1)^T$。

此时得到正交向量组：$\beta_1 = (1, -1, 0)^T, \beta_2 = (1, 1, 2)^T, \beta_3 = (1, 1, -1)^T$。

**第二步：单位化**

计算长度：
$\|\beta_1\| = \sqrt{2}$
$\|\beta_2\| = \sqrt{1+1+4} = \sqrt{6}$
$\|\beta_3\| = \sqrt{1+1+1} = \sqrt{3}$

得到标准正交基 $\eta_1, \eta_2, \eta_3$：
$$
\eta_1 = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix}, \quad
\eta_2 = \frac{1}{\sqrt{6}} \begin{pmatrix} 1 \\ 1 \\ 2 \end{pmatrix}, \quad
\eta_3 = \frac{1}{\sqrt{3}} \begin{pmatrix} 1 \\ 1 \\ -1 \end{pmatrix}
$$

---

### 正交矩阵与正交变换

**题目**
判定以下矩阵是否为正交矩阵：
$$
A = \begin{pmatrix}
1/\sqrt{2} & 1/\sqrt{6} & -1/\sqrt{3} \\
-1/\sqrt{2} & 1/\sqrt{6} & -1/\sqrt{3} \\
0 & 2/\sqrt{6} & 1/\sqrt{3}
\end{pmatrix}
$$

**解析**
根据定理 4.6，矩阵 $A$ 为正交矩阵 $\iff A$ 的列向量组是 $\mathbb{R}^n$ 的一组标准正交基。
记 $A = (\eta_1, \eta_2, \eta_3)$。

1. **检验单位长度**：

    $\|\eta_1\|^2 = (1/\sqrt{2})^2 + (-1/\sqrt{2})^2 + 0 = 1/2 + 1/2 = 1$

    $\|\eta_2\|^2 = (1/\sqrt{6})^2 + (1/\sqrt{6})^2 + (2/\sqrt{6})^2 = 1/6 + 1/6 + 4/6 = 1$

    $\|\eta_3\|^2 = (-1/\sqrt{3})^2 + (-1/\sqrt{3})^2 + (1/\sqrt{3})^2 = 1/3 + 1/3 + 1/3 = 1$

    (满足单位向量条件)

2. **检验两两正交**：
    $(\eta_1, \eta_2) = \frac{1}{\sqrt{12}} - \frac{1}{\sqrt{12}} + 0 = 0$

    $(\eta_1, \eta_3) = -\frac{1}{\sqrt{6}} + \frac{1}{\sqrt{6}} + 0 = 0$

    $(\eta_2, \eta_3) = -\frac{1}{\sqrt{18}} - \frac{1}{\sqrt{18}} + \frac{2}{\sqrt{18}} = 0$

    (满足正交条件)

综上，该矩阵的列向量组是一组标准正交基，故 $A$ 是正交矩阵。

## 第 5 章 | 矩阵的特征值和特征向量 矩阵的对角化 习题集

### 矩阵的特征值与特征向量的计算

**题目**
求矩阵 $A$ 的特征值和特征向量，其中
$$
A = \begin{pmatrix}
5 & -1 & -1 \\
3 & 1 & -1 \\
4 & -2 & 1
\end{pmatrix}
$$

**解析**
**1. 求特征值**
计算 $A$ 的特征多项式：
$$
\begin{aligned}
|\lambda I - A| &= \begin{vmatrix} \lambda - 5 & 1 & 1 \\ -3 & \lambda - 1 & 1 \\ -4 & 2 & \lambda - 1 \end{vmatrix} \\
&\xrightarrow{c_2+c_3} \begin{vmatrix} \lambda - 5 & 2 & 1 \\ -3 & \lambda & 1 \\ -4 & \lambda + 1 & \lambda - 1 \end{vmatrix} \\
&\xrightarrow{r_3-r_2} \begin{vmatrix} \lambda - 5 & 2 & 1 \\ -3 & \lambda & 1 \\ -1 & 1 & \lambda - 2 \end{vmatrix}
\end{aligned}
$$
（注：此处也可直接利用行列式展开计算，或利用行和相等性质技巧：各行元素之和均为 3，故 $\lambda=3$ 是一个特征值）

利用行变换化简，最终得到特征多项式为 $(\lambda - 3)(\lambda - 2)^2$。

令 $|\lambda I - A| = 0$，解得特征值为：

$\lambda_1 = 3$（单根），$\lambda_2 = \lambda_3 = 2$（二重根）。

**2. 求特征向量**
(1) 对于 $\lambda_1 = 3$，求解 $(3I - A)x = 0$：
$$
3I - A = \begin{pmatrix} -2 & 1 & 1 \\ -3 & 2 & 1 \\ -4 & 2 & 2 \end{pmatrix} \xrightarrow{\text{初等变换}} \begin{pmatrix} 1 & 0 & -1 \\ 0 & 1 & -1 \\ 0 & 0 & 0 \end{pmatrix}
$$
同解方程组为 $x_1 = x_3, x_2 = x_3$。

取自由未知量 $x_3 = 1$，得特征向量 $\xi_1 = (1, 1, 1)^T$。

故对应于 $\lambda_1 = 3$ 的全部特征向量为 $k_1 \xi_1$（$k_1 \neq 0$）。

(2) 对于 $\lambda_2 = 2$，求解 $(2I - A)x = 0$：
$$
2I - A = \begin{pmatrix} -3 & 1 & 1 \\ -3 & 1 & 1 \\ -4 & 2 & 1 \end{pmatrix} \xrightarrow{\text{初等变换}} \begin{pmatrix} 1 & 0 & -1/2 \\ 0 & 1 & -1/2 \\ 0 & 0 & 0 \end{pmatrix}
$$

代入原方程：$-3(1)+2+1=0$ 成立；$-4(1)+2(2)+1=1 \neq 0$？
**修正**：让我们重新计算 $2I-A$ 的秩。

$\begin{pmatrix} -3 & 1 & 1 \\ -4 & 2 & 1 \end{pmatrix} \to \begin{pmatrix} -3 & 1 & 1 \\ -1 & 1 & 0 \end{pmatrix} \to \begin{pmatrix} 1 & -1 & 0 \\ 0 & -2 & 1 \end{pmatrix}$。

即 $x_1 = x_2, x_3 = 2x_2$。取 $x_2=1$，得 $\xi_2 = (1, 1, 2)^T$。

故对应于 $\lambda_2 = 2$ 的全部特征向量为 $k_2 \xi_2$（$k_2 \neq 0$）。

**注意**：$\lambda=2$ 是二重根，但只求出了 1 个线性无关特征向量，故该矩阵**不可对角化**。

---

### 特征值的性质应用

**题目**
设 3 阶方阵 $A$ 的特征值为 $1, 1, 2$。
求：(1) $|A|$；(2) $|A + 2I|$；(3) $|A^* + 3I|$。

**解析**
(1) 求 $|A|$

根据特征值性质：矩阵的行列式等于其所有特征值的乘积。
$$ |A| = 1 \times 1 \times 2 = 2 $$

(2) 求 $|A + 2I|$

设 $f(\lambda) = \lambda + 2$。根据性质，若 $\lambda$ 是 $A$ 的特征值，则 $\lambda + 2$ 是 $A + 2I$ 的特征值。

$A$ 的特征值为 $1, 1, 2$，则 $A + 2I$ 的特征值为：

$1+2=3, \quad 1+2=3, \quad 2+2=4$。

所以：

$$ |A + 2I| = 3 \times 3 \times 4 = 36 $$

(3) 求 $|A^* + 3I|$

首先，由 $|A|=2 \neq 0$ 知 $A$ 可逆。

$A^*$ 的特征值是 $\frac{|A|}{\lambda}$。

对应 $A$ 的特征值 $1, 1, 2$，matrix $A^*$ 的特征值为：

$\frac{2}{1} = 2, \quad \frac{2}{1} = 2, \quad \frac{2}{2} = 1$。

则 $A^* + 3I$ 的特征值为：

$2+3=5, \quad 2+3=5, \quad 1+3=4$。

所以：

$$ |A^* + 3I| = 5 \times 5 \times 4 = 100 $$

---

### 相似对角化的判定与计算

**题目**
设矩阵
$$
A = \begin{pmatrix}
1 & -1 & -1 & -1 \\
-1 & 1 & -1 & -1 \\
-1 & -1 & 1 & -1 \\
-1 & -1 & -1 & 1
\end{pmatrix}
$$
问 $A$ 是否与对角矩阵相似？若相似，求可逆矩阵 $P$ 及对角矩阵 $\Lambda$，使得 $P^{-1}AP = \Lambda$。

**解析**
**1. 求特征值**
计算 $|\lambda I - A|$。
利用行列式性质：各列加到第 1 列，提取公因子。
$$
|\lambda I - A| = \begin{vmatrix}
\lambda-1 & 1 & 1 & 1 \\
1 & \lambda-1 & 1 & 1 \\
1 & 1 & \lambda-1 & 1 \\
1 & 1 & 1 & \lambda-1
\end{vmatrix}
$$
将第 2, 3, 4 列都加到第 1 列：
$$
= (\lambda - 1 + 3) \begin{vmatrix}
1 & 1 & 1 & 1 \\
1 & \lambda-1 & 1 & 1 \\
1 & 1 & \lambda-1 & 1 \\
1 & 1 & 1 & \lambda-1
\end{vmatrix} = (\lambda + 2) (\lambda - 2)^3
$$
故 $A$ 的特征值为：$\lambda_1 = -2$（单根），$\lambda_2 = 2$（三重根）。

**2. 判定并求特征向量**

(1) 对于单根 $\lambda_1 = -2$，必有 1 个线性无关特征向量。
求解 $(-2I - A)x = 0$：
$$
\begin{pmatrix} -3 & 1 & 1 & 1 \\ 1 & -3 & 1 & 1 \\ 1 & 1 & -3 & 1 \\ 1 & 1 & 1 & -3 \end{pmatrix} \to \begin{pmatrix} 1 & 0 & 0 & -1 \\ 0 & 1 & 0 & -1 \\ 0 & 0 & 1 & -1 \\ 0 & 0 & 0 & 0 \end{pmatrix}
$$
取基础解系 $\xi_1 = (1, 1, 1, 1)^T$。

(2) 对于三重根 $\lambda_2 = 2$，需验证是否有 3 个线性无关特征向量。
求解 $(2I - A)x = 0$：
$$
2I - A = \begin{pmatrix} 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \end{pmatrix} \xrightarrow{\text{行变换}} \begin{pmatrix} 1 & 1 & 1 & 1 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix}
$$
秩 $r(2I - A) = 1$，故基础解系所含向量个数为 $4 - 1 = 3$。

因为无关特征向量个数（3个）等于特征值的重数（3重），所以 **$A$ 可以对角化**。

取自由未知量为 $x_2, x_3, x_4$，分别取 $(1,0,0), (0,1,0), (0,0,1)$，得基础解系：

$$
\xi_2 = \begin{pmatrix} -1 \\ 1 \\ 0 \\ 0 \end{pmatrix}, \quad \xi_3 = \begin{pmatrix} -1 \\ 0 \\ 1 \\ 0 \end{pmatrix}, \quad \xi_4 = \begin{pmatrix} -1 \\ 0 \\ 0 \\ 1 \end{pmatrix}
$$

**3. 写出结果**

令 $P = (\xi_1, \xi_2, \xi_3, \xi_4) = \begin{pmatrix} 1 & -1 & -1 & -1 \\ 1 & 1 & 0 & 0 \\ 1 & 0 & 1 & 0 \\ 1 & 0 & 0 & 1 \end{pmatrix}$。

则 $P$ 可逆，且
$$
P^{-1}AP = \Lambda = \text{diag}(-2, 2, 2, 2)
$$

---

### 实对称矩阵的对角化

**题目**
设实对称矩阵
$$
A = \begin{pmatrix}
1 & -2 & 2 \\
-2 & -2 & 4 \\
2 & 4 & -2
\end{pmatrix}
$$
求正交矩阵 $T$，使得 $T^{-1}AT$ 为对角矩阵，并写出该对角矩阵。

**解析**
**1. 求特征值**

计算特征方程 $|\lambda I - A| = 0$：
$$
\begin{vmatrix} \lambda-1 & 2 & -2 \\ 2 & \lambda+2 & -4 \\ -2 & -4 & \lambda+2 \end{vmatrix} = (\lambda-2)(\lambda^2+5\lambda-14) = (\lambda-2)^2(\lambda+7) \quad
$$

故特征值为：$\lambda_1 = 2$（二重根），$\lambda_2 = -7$（单根）。

**2. 求特征向量**

(1) 对于 $\lambda_1 = 2$（二重），求解 $(2I - A)x = 0$：
$$
\begin{pmatrix} 1 & 2 & -2 \\ 2 & 4 & -4 \\ -2 & -4 & 4 \end{pmatrix} \to \begin{pmatrix} 1 & 2 & -2 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}
$$

方程为 $x_1 + 2x_2 - 2x_3 = 0$。

取基础解系：$\xi_1 = (-2, 1, 0)^T, \xi_2 = (2, 0, 1)^T$。

**施密特正交化**（组内正交）：

令 $\beta_1 = \xi_1 = (-2, 1, 0)^T$。

令 $\beta_2 = \xi_2 - \frac{(\xi_2, \beta_1)}{(\beta_1, \beta_1)}\beta_1 = \begin{pmatrix} 2 \\ 0 \\ 1 \end{pmatrix} - \frac{-4}{5} \begin{pmatrix} -2 \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 2/5 \\ 4/5 \\ 1 \end{pmatrix}$。

取整：$\beta_2' = (2, 4, 5)^T$。

**单位化**：

$\eta_1 = \frac{1}{\sqrt{5}}(-2, 1, 0)^T$

$\eta_2 = \frac{1}{\sqrt{4+16+25}}(2, 4, 5)^T = \frac{1}{3\sqrt{5}}(2, 4, 5)^T$

(2) 对于 $\lambda_2 = -7$（单根），求解 $(-7I - A)x = 0$：
$$
\begin{pmatrix} -8 & 2 & -2 \\ 2 & -5 & -4 \\ -2 & -4 & -5 \end{pmatrix} \xrightarrow{\text{化简}} \begin{pmatrix} 1 & 0 & 1/2 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{pmatrix}
$$

取基础解系 $\xi_3 = (1, 2, -2)^T$。

**单位化**：

$\eta_3 = \frac{1}{\sqrt{1+4+4}}(1, 2, -2)^T = \frac{1}{3}(1, 2, -2)^T$。

**3. 构造正交矩阵**
$$
T = (\eta_1, \eta_2, \eta_3) = \begin{pmatrix}
-2/\sqrt{5} & 2/(3\sqrt{5}) & 1/3 \\
1/\sqrt{5} & 4/(3\sqrt{5}) & 2/3 \\
0 & 5/(3\sqrt{5}) & -2/3
\end{pmatrix}
$$
此时，
$$
T^{-1}AT = \text{diag}(2, 2, -7)
$$
