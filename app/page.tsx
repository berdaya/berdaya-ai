import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Berdaya AI
      </h1>
      <p className="mb-4" style={{ whiteSpace: 'pre-line' }}>
        {`We believe artificial intelligence can be the defining force for a world free of poverty, corruption, and underdevelopment.\n
        Our goal is to build the most efficient, reliable, and scalable AI system. We believe the future of AI is building a network of specialized models working together seamlessly.\n
        Each decision—why a model was chosen, how results were verified—is fully explainable.\n
        This modular design mirrors efficient systems in nature and engineering, where specialized components handle specific tasks.\n
        This way, we can redefine what’s possible—scaling the impact to its most unthinkable possibility.\n
        Join us on our mission to build a better future through ethical, explainable AI.\n
        Contact us at berdaya.ai@gmail.com
      `}
      </p>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
