import { useRouter } from "next/router"

function BlogDetail() {
        const router = useRouter()
        const blogId = router.query.blogId
    return <h1>Details about blog post {blogId} </h1>
}

export default BlogDetail
