import Card from '../components/Card';

export default function Store(props) {
	return (
		<section className="grid grid-cols-3 gap-8 my-12 max-w-6xl">
			<Card items={props.items} />
		</section>
	);
}
