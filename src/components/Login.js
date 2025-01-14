import { useState } from "react";
import { useRouter } from "next/router"; // 导入 useRouter hook

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();  // 使用 useRouter 创建 router 对象

    const handleSubmit = async (e) => {
        e.preventDefault();
        // 发送登录请求
        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            // 登录成功，跳转到主页
            localStorage.setItem("userLoggedIn", true);
            router.push("/");
        } else {
            // 登录失败，显示错误信息
            alert("Login Failed");
        }
    };

    return (
        <div className="max-w-sm mx-auto mt-10">
            <h2 className="text-center text-2xl font-bold">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Username</label>
                    <input
                        type="text"
                        name="username"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
