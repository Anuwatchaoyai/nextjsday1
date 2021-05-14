import React from 'react'
import styles from './Backend.module.css'

const dashboard = () => {
	return (
		<div>
			<h1 className={styles.heading}>This is dashboard page.</h1>
			<p className="mytitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga libero repellat atque, rem quibusdam aliquam eum fugit nihil temporibus voluptatibus aliquid facere tenetur itaque natus. Repudiandae quam velit vero dolorum!</p>
			<img src="../../images/img.jpg" alt="" width="200" />
		</div>
	)
}

export default dashboard
