const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors()); // 允许跨域请求
app.use(express.json()); // 解析 JSON 请求体

// 数据库连接配置

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '20252025',
  database: 'file', // 数据库名
});

// 测试数据库连接
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

// 获取所有资源的 API
app.get('/api/resources', (req, res) => {
  const query = 'SELECT * FROM resources';
  db.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching resources:', err);
      res.status(500).json({ error: 'Failed to fetch resources' });
    } else {
      res.json(result); // 返回所有资源
    }
  });
});


// 获取随机资源的 API（保持不变）
app.get('/api/random-resource', (req, res) => {
  const query = 'SELECT * FROM resources ORDER BY RAND() LIMIT 1';
  db.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).json({ error: 'Failed to fetch resource' });
    } else {
      res.json(result[0]); // 返回随机资源
    }
  });
});

// 启动服务器
const PORT = 3004;
app.listen(PORT, 'localhost',() => {
  console.log(`Server running on http://localhost:${PORT}`);
});
