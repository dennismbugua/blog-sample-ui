import React from 'react'
import './sidebar.css'

export default function Sidebar() {
	return (<div className='sidebar'>
		<div className='sidebarItem'>
			<span className='sidebarTitle'>About Me</span>
			<img src="https://images.unsplash.com/photo-1623576984296-2c16542ac137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=626&q=80" alt='' />
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
		</div>
		<div className='sidebarItem'>
			<span className='sidebarTitle'>Categories</span>
			<ul className='sidebarList'>
				<li className='sidebarListItem'>Life</li>
				<li className='sidebarListItem'>Music</li>
				<li className='sidebarListItem'>Style</li>
				<li className='sidebarListItem'>Sport</li>
				<li className='sidebarListItem'>Tech</li>
				<li className='sidebarListItem'>Cinema</li>
			</ul>
		</div>
		<div className='sidebarItem'>
			<span className='sidebarTitle'>Follow Us</span>
			<div className='sidebarSocial'>
				<i className='sidebarIcon fa fa-facebook'></i>
				<i className='sidebarIcon fa fa-linkedin'></i>
				<i className='sidebarIcon fa fa-instagram'></i>
				<i className='sidebarIcon fa fa-twitter'></i>
			</div>
		</div>
	</div>)
}