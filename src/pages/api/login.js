import bcrypt from 'bcryptjs';
import { users } from '../../lib/data';  // 假设你有一个用户数据文件

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // 查找用户数据（假设数据存在于 users 数组）
    const user = users.find((user) => user.username === username);

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // 比较密码
    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    // 登录成功，返回用户信息
    return res.status(200).json({ message: 'Login successful', user });
  }

  // 如果是其他请求方式
  res.status(405).json({ message: 'Method Not Allowed' });
}
