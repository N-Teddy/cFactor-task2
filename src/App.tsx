import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { features } from "./data/features"
import { articles } from "./data/articles"
import Article from "./components/Article/Article"
import Feature from "./components/Feature/Feature"
import { useTheme } from "./context/ThemeContext"

function App() {

    const { theme } = useTheme()

    return (
        <>
            <Header />

            {/* Hero section - */}
            <section className=" px-4 sm:px-6 lg:px-[130px]">
                {/* Hero content goes here */}
            </section>

            {/* Features section */}
            <section
                style={{
                    backgroundColor: theme === "dark" ? "#2d314d" : "#fff",
                    color: theme === "dark" ? "#fff" : "#6a7282 "
                }}
                className="bg-[#f4f5f7] py-16 md:py-40 px-4 sm:px-6 lg:px-[130px]"
            >
                <div className="container mx-auto">
                    <div className="text-center md:text-left max-w-3xl mx-auto md:mx-0">
                        <h2 className="text-3xl md:text-4xl font-light text-dark-blue mb-5">Why choose Easybank?</h2>
                        <p className="text-grayish-blue mb-8 md:mb-16">
                            We leverage Open Banking to turn your bank account into your financial hub.
                            Control your finances like never before.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-9 md:gap-6">
                        {features.map((feature, index) => (
                            <Feature
                                key={index}
                                index={index}
                                title={feature.title}
                                description={feature.description}
                                icon={feature.icon}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Article section */}
            <section
                style={{
                    backgroundColor: theme === "dark" ? "#2d314d" : "#fff",
                    color: theme === "dark" ? "#fff" : "#6a7282 "
                }}
                className="bg-very-light-gray py-16 md:py-40 px-4 sm:px-6 lg:px-[130px]"
            >
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-light text-dark-blue mb-8 md:mb-12 text-center md:text-left">
                        Latest Articles
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {articles.map((article, index) => (
                            <Article
                                key={index}
                                index={index}
                                author={article.author}
                                image={article.image}
                                title={article.title}
                                content={article.content}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default App