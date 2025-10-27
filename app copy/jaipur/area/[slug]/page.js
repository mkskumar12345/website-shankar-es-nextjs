export default function Page({ params }) {
  const { slug } = params;
  return <div>Area: {slug}</div>;
}
