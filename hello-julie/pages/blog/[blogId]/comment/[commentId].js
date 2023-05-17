import { useRouter } from "next/router";

function Comment() {
    const router = useRouter()
    const { blogId, commentId } = router.query

    return <h1>Comment {commentId} for Blog {blogId} </h1>
}

export default Comment