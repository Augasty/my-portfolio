<script>
	import skills from '$lib/Skills';
</script>

<svelte:head>
	<title>Sayak — About</title>
</svelte:head>

<div class="container">
	<main>
		<h1>About</h1>
		<h4>
I'm a creative problem solver and product owner with over 2 years of experience in developing and delivering scalable products, with a focus on agile product delivery. Skilled in collaborating with stakeholders to prioritize product features based on user feedback, creating user-centric experiences, and building strong client relationships.

Currently working at PwC, I am also passionate about design, UX, and frontend development.
		</h4>
		<h2>Skills</h2>
		<!-- The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs. -->
		{#each Object.entries(skills) as [section, technologies]}
			<ul>
				<li>
					<h4>
						{section}:
					</h4>
					<div class="list">
						{#each technologies as technology}
							<div>
								{technology}
							</div>
						{/each}
					</div>
				</li>
			</ul>
		{/each}
	</main>
</div>

<style>
	.container {
		max-width: 900px;
		padding: 0;
		display: flex;
		justify-content: center;
	}

	main {
		max-width: 100%;
		min-height: 500px;
		text-align: left;
		margin: 0 auto;
		box-sizing: border-box;
	}

	h1 {
		font-weight: 700;
		margin: 0 0 50px 0;
		font-size: 36px;
		text-align: start;
	}

	h2 {
		margin-top: 50px;
	}

	.list {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		gap: 30px;
	}

	@media (min-width: 900px) {
		.list {
			flex-direction: row;
		}
		main > h1 {
			font-size: 48px;
		}
	}

	@media (max-width: 900px) {
		h4{
			width:80vw;
			position: center;
		}
	}
</style>
