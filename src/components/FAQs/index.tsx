import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text } from '@chakra-ui/react';

export default function FaqWrapper() {
	return (
		<>
			<Text fontWeight={500} color={'#FAFAFA'} fontSize={24}>
				FAQ
			</Text>
			<Accordion allowMultiple margin={'0 auto'} style={{ width: '100%', maxWidth: '600px' }}>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box flex="1" textAlign="left">
								What is this?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
					It's an aggregator of DEX aggregators, we query the price in 1inch, cowswap, matcha... and then offer you the best price among all of them
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box flex="1" textAlign="left">
								Does Dexfin take any fees?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						Dexfin takes 0 fee on swaps.
						<br />
						<br /> You'll get the exact same price swapping through Dexfin as what you'd get swapping through the chosen aggregator directly.
						<br />
						<br />
						We do add our referral code to swaps tho, so, for aggregators with revenue sharing, they will send us part of the fee they earn. This is not an extra fee, you'd be charged the same fee anyway, but now a small part of it is shared with Dexfin. We also integrate aggregators with no fee sharing the best price, and in those cases we don't make any money.
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box flex="1" textAlign="left">
								Is it safe?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
					Our aggregator uses the router contract of each aggregator, we don't use any contracts developed by us. Thus you inherit the same security you'd get by swapping directly from their UI instead of ours.
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box flex="1" textAlign="left">
								Will I be eligible for aggregator airdrops if I swap through DefiLlama?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						We execute swaps directly against the router of each aggregator, so there's no difference between a swap executed directly from their UI and a swap executed from Dexfin.
						<br />
						<br />
						Thus, if any of the aggregators we integrate does an airdrop in the future, all swaps made through them would be eligible for their airdrop.
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</>
	);
}