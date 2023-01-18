import { Heading, Text } from '@chakra-ui/react';
import styled from 'styled-components';
import { AggIcons, SmolCheck } from '../Icons';

const IconsBody = styled.div`
	display: flex;
	width: fit-content;
	overflow: hidden;
	margin-top: 16px;
	padding-left: 48px;
	padding-right: 48px;
	padding-bottom: 16px;

	animation: slide infinite linear 10s;

	@keyframes slide {
		0% {
			transform: translate3d(-60px, 0, 0);
		}
		100% {
			transform: translate3d(-540px, 0, 0);
		}
	}
`;

const MainIcon = styled.div`
	z-index: 1;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
`;

const IconElem = styled.div`
	box-shadow: 0px 2.63014px 15.7808px rgba(0, 0, 0, 0.45);
	width: 48px;
	height: 48px;
	margin-right: 48px;
`;

const Header = styled.div`
	position: relative;
`;

const CheckBody = styled.div`
	color: rgb(112, 160, 247);
	display: flex;
	justify-content: space-around;
	margin-top: 16px;
`;

const CheckWithText = ({ text }: { text: string }) => {
	return (
		<div style={{ display: 'flex', lineHeight: '12px' }}>
			{SmolCheck} <div style={{ fontSize: 12, marginLeft: '4px', marginRight: '4px' }}>{text}</div>
		</div>
	);
};

const RoutesPreview = () => {
	return (
		<div
			style={{
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-around',
				paddingTop: '30px'
			}}
		>
			<Header>
				<MainIcon><img style={{ width: '81px', height: '80px'}} src='/mainicon.png' alt=""/></MainIcon>

				<IconsBody>
					{[...AggIcons, ...AggIcons].map((Icon, i) => (
						<IconElem key={i}>{Icon}</IconElem>
					))}
				</IconsBody>
			</Header>
			<div style={{ zIndex: 1 }}>
				<Heading size={'md'} textAlign="center" mt={'4'}>
					The Aggregator of Aggregators
				</Heading>
				<CheckBody>
					<CheckWithText text="Totally Free" />
					<CheckWithText text="Gas Estimation" />
					<CheckWithText text="Preserves Privacy" />
				</CheckBody>

				<Text color={'gray.300'} textAlign="center" mt={6}>
					DexfinSwap looks for the best route for your trade <br /> among a variety of Dex Aggregators, guaranteeing you{' '}
					<br /> the best execution prices in DeFi.
				</Text>
			</div>
		</div>
	);
};

export default RoutesPreview;
