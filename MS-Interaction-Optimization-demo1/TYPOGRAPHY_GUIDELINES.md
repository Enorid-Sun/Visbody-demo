# 全局字体使用规范 (Typography Guidelines)

本项目（含深色及亮色模式的主体结构）在设计上主要采用以 **Barlow** 字体族为主的基础视觉体系，同时在强动感、强数据张力的训练和结算场景中引入了 **Archivo Black** 配合斜体呈现。

全局共包含三种核心英文字体设定（所有项目中涉及的产品界面文案默认以英文展示）。

## 1. 字体引入 (Font Loading)

在所有 HTML 文件的 `<head>` 区域，需统一引入以下 Google Fonts 链接：

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

---

## 2. 字体定义与适用范围 (Usage Rules)

### 2.1 基础正文体系 (Body Text)

*   **字体族**: `font-family: "Barlow", system-ui, -apple-system, "Segoe UI", sans-serif;`
*   **字重**: Regular (400), Medium (500), SemiBold (600)
*   **适用场景**:
    *   页面全局 `body` 的默认字体。
    *   绝大部分的正文内容（`p`）、副标题、按钮描述。
    *   辅助说明文本、标签（Label）、表单输入框文本。
    *   列表项细节、历史记录的基础描述文本。

### 2.2 界面标题与常规数据 (Headings & UI Data)

*   **字体族**: `font-family: "Barlow Condensed", sans-serif;`
*   **字重**: SemiBold (600), Bold (700)
*   **适用场景**:
    *   页面的主副标题（如 `h1`, `h2` 标签）。
    *   常规卡片内的数据展示（如个人主页的里程碑数据、首页的卡路里/时长数据、表盘上的数字）。
    *   按钮内的主要引导词（如 Start / End 等主要操作）。
    *   紧凑且需要一定层级突出的短文本。

### 2.3 核心训练与结算指标 (Hardcore Training Metrics)

*   **字体族**: `font-family: "Archivo Black", sans-serif;`
*   **字形设定**: 配合 `font-style: italic;` 使用
*   **适用场景**:
    *   **极强视觉冲击力的数据展示**。主要出现在**训练沉浸页**、**普拉提视图**、**训练报告页**等场景。
    *   **具体元素包括**: 
        - 实时消耗的卡路里、能量输出 (Energy Output)、总阻力重量 (Total Resistance) 等超大号指标数字。
        - 智能评测给出的 AI 运动得分面板的数字（Score）。
        - 报告页面顶部及底部的聚合核心结算数据 (`.tr-stat strong`, `.tr-final-score strong` 等)。
        - 连击 (Combo) 等成就徽章里的动感数字。
    *   **注意**: 仅用于**数字**或极少数字母单位，不可用于成段文本或常规标题。

---

## 3. 按模块 / 页面举例说明

### 首页与框架 (Home & Shell)
*   **正文 (Barlow)**: 侧边导航项详情、卡片描述文本。
*   **标题/数据 (Barlow Condensed)**: 顶部高亮的用户名、表盘倒计时、周运动汇总卡片数据。

### 沉浸式训练 / 普拉提视图 (Immersive / Pilates View)
*   **控制台/导航 (Barlow / Barlow Condensed)**: 各类状态栏文字、图表图例。
*   **训练核心参数 (Archivo Black Italic)**: 阻力磅数（如 42.0kg）、当前得分数字、动作连击数、中央时间仪表盘超大数字。配合 `text-shadow` 使用以提升在深色背景上的发光质感。

### 结算与报告 (Training Reports)
*   **文字解析 (Barlow)**: 教练指导、建议提示、详细肌肉群名称。
*   **基础分类 (Barlow Condensed)**: 图表标题、各模块的区分 Title。
*   **最终成绩 (Archivo Black Italic)**: 单项评分极大数字（例如 98 分）、超大卡路里消耗结算等。

---

## 4. 辅助特殊探索字体 (仅做了解，不作全局规范)
在 `temp-plan-b-home-light-energy.html` 等局部探索性原型中，曾短期使用过 `Oswald` 或 `Teko` 作为特殊设计语言探索，但已从主线体系中抽离，全局标准生产仍以本规范（`Barlow` + `Barlow Condensed` + `Archivo Black`）为准。