import { Container } from "@settings/components/Container";
import { BaseCard } from "@settings/components/BaseCard";
import { MainTitle } from "@settings/components/typography/MainTitle";
import { FormActions } from "@settings/components/form/FormActions";
import { Button } from "@settings/components/Button";


const Settings = () => {
	return (
		<Container>
			<BaseCard>
				<MainTitle>Settings</MainTitle>
				<FormActions>
					<Button type="submit">Save Settings</Button>
				</FormActions>
			</BaseCard>
		</Container>
	)
}

export default Settings