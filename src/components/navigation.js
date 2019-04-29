import React, { Component } from 'react'

export default class Navigation extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-dark bg-dark">
					<a href="  " className="text-white">
						{this.props.title}
					</a>
				</nav>
			</div>
		)
	}
}
