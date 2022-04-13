import React from 'react';
import Heading from '../../components/0UI/Heading/Heading';
import MyLink from '../../components/0UI/MyLink/MyLink';
import Container from '../../components/Container/Container';
import styles from './about.module.css'

const About = (props) => {

	return (
		<section>
			<Container>
				<Heading className={styles.heading}>
					About
				</Heading>
				<p className={styles.text + ' text-reset'}>
					This is a simple learning app. As an API, I used
					<MyLink href='https://jsonplaceholder.typicode.com/'> JSON Placeholder</MyLink>. It is possible to create your own posts, an endless feed is implemented and more.
				</p>
				<h2 className={styles.subHeading + ' text-reset'}>
					A little about React
				</h2>
				<p className={styles.text + ' text-reset'}>
					React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components.
					It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM,
					so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.

				</p>
				<ul className={styles.list + ' list-reset'}>
					<li className={styles.listItem}>
						Original author:	Jordan Walke
					</li>
					<li className={styles.listItem}>
						Developer(s):	Meta and community
					</li>
					<li className={styles.listItem}>
						Initial release:	May 29, 2013
					</li>
					<li className={styles.listItem}>
						Stable release: 17.0.2  22 March 2021;
					</li>
					<li className={styles.listItem}>
						Written in	JavaScript
					</li>
					<li className={styles.listItem}>
						Platform:	Web platform
					</li>
					<li className={styles.listItem}>
						Type:	JavaScript library
					</li>
					<li className={styles.listItem}>
						Website:	<MyLink href="reactjs.org">reactjs.org</MyLink>
					</li>
				</ul>
			</Container>
		</section>
	)
}
/* 

					
					
*/

export default About;
