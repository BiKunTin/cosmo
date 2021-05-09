<template>
	<div>
		<div class="container">
			<SpH3>
				Voter Module
			</SpH3>
			<poll-form />
			<poll-list />
			<SpType modulePath="BiKunTin.cosmo.cosmo" moduleType="Comment"  />
			<SpType modulePath="BiKunTin.cosmo.cosmo" moduleType="Post"  />
		</div>
	</div>
</template>

<script>
import PollForm from "../components/PollForm";
import PollList from "../components/PollList";

export default {
	name: 'Types',
	components: { PollForm, PollList },
}
</script>

