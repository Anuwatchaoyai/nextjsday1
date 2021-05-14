import React from 'react'
import { useRouter } from 'next/router'
import postStyle from './Post.module.scss'

const PostName = () => {

	const router = useRouter()

	return (
		<div>
			<h1 className={postStyle.heading}>This is a post: {router.query.name}</h1>
		</div>
	)
}

export default PostName
