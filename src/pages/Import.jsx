import { Container } from "@settings/components/Container";
import { BaseCard } from "@settings/components/BaseCard";
import { MainTitle } from "@settings/components/typography/MainTitle";
import { Description } from "@settings/components/typography/Description";
import { Button } from "@settings/components/Button";


const Import = () => {
	return (
		<Container>
			<BaseCard>
				<MainTitle>Demo Import</MainTitle>
				<Description>
					<p>You can import demo menu and add-ons to your website. This will help you get started quickly by providing pre-configured menu items and add-ons as examples.</p>
				</Description>
				<Button>Import Demo Content</Button>
			</BaseCard>
		</Container>
	)
}

export default Import