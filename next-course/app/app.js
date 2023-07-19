import { Router } from "next/router";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<Home />} />
                <Route path="posts" element={<Home />}>
                    <Route path="new" element={<NewPost />} />
                    <Route path=":postId" element={<Post />} />
                </Route>
            </Routes>
        </Router>
    )
}