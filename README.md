# Welcome to the Biomindlogic Website Project

To start the development server:

1. Run the following command in your terminal:
   ```bash
   npm run dev
2. After the server starts, press `Ctrl + Click` on the following link to open the webpage:
   ```bash
   Local: http://localhost:3000



# 数据库字段说明

## SubjectChapter.json

### 每条记录的字段说明

| 字段名          | 类型     | 描述                                               |
|-----------------|----------|--------------------------------------------------|
| `name`         | `string` | 章节名称，例如 `Chapter 1: Cell Structure`。       |
| `title`        | `string` | 章节标题，用于更简短的显示。                        |
| `description`  | `string` | 章节描述，概述该章节的核心内容。                    |
| `category`     | `string` | 科目分类缩写，例如 `al` 表示 A-Level，`ig` 表示 IGCSE。 |
| `level`        | `string` | 学科级别，例如 `as` 表示 AS Level，`a2` 表示 A2 Level。 |
| `subject`      | `string` | 学科名，例如 `biology`。                            |
| `unit`         | `string` | 单元编号，用于唯一标识每个章节。                    |
| `analysisLink` | `string` | 分析资源的链接。                                   |
| `mindmapLink`  | `string` | 思维导图资源的链接。                               |
| `videoLink`    | `string` | 视频资源的链接。                                   |

---

## SubjectData.json

### 主分类对象

| 字段名          | 类型     | 描述                           |
|-----------------|----------|------------------------------|
| `name`         | `string` | 主分类名称，例如 `A-Level`。    |
| `subcategories`| `array`  | 包含该分类下的子分类数组。      |

### 子分类对象

| 字段名      | 类型     | 描述                         |
|-------------|----------|----------------------------|
| `name`      | `string` | 子分类名称，例如 `AS` 或 `A2`。 |
| `subjects`  | `array`  | 包含该子分类下的学科信息数组。 |

### 学科对象

| 字段名  | 类型     | 描述                                       |
|---------|----------|------------------------------------------|
| `name`  | `string` | 学科名称，例如 `Biology`。                 |
| `key`   | `string` | 唯一键，用于标识学科的键值，例如 `A-Level AS Biology`。 |
