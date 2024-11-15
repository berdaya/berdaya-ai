import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Berdaya AI
      </h1>
      <p className="mb-4" style={{ whiteSpace: 'pre-line' }}>
        {`We believe artificial intelligence can be the force that helps create a world free of poverty, corruption, and underdevelopment.\n
          Our goal is to build the most efficient, reliable, and scalable AI system. The future of AI, in our view, isn’t just about bigger models—it's about reasoning & a network of specialized models that work together seamlessly.\n
          AI that can solve problems with less data. AI that understands context, adapts, and collaborates to address complex challenges.\n
          Mirroring efficient systems in nature and engineering, where each piece does its job in harmony with the rest.\n
          Each decision—why a model was chosen, how results were verified—is fully explainable. Which is where AI can truly make a difference.\n
          This is how we can push the boundaries of what’s possible—scaling the impact to its most unthinkable possibility.\n
          Join us in building a better future with ethical, explainable AI.\n
          Reach out to us at dev@berdaya.ai.
      `}
      </p>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
