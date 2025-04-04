import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { features } from "./data/features"
import { articles } from "./data/articles"
import Article from "./components/Article/Article"
import Feature from "./components/Feature/Feature"
import { useTheme } from "./context/ThemeContext"
import Button from "./components/Button/Button"

function App() {

    const { theme } = useTheme()

    return (
        <>
            <Header />

            {/* Hero section */}
            <section
                style={{
                    backgroundColor: theme === "dark" ? "#2d314d" : "#fff",
                    color: theme === "dark" ? "#fff" : "#6a7282"
                }}
                className="relative overflow-hidden bg-very-light-gray pt-28 md:pt-0 px-5 sm:px-6 lg:px-[8%] 2xl:px-[130px]"
            >
                {/* Mobile background images */}
                <div className="md:hidden relative -mx-5">
                    <div className="bg-very-light-gray">
                        <img
                            src="/images/bg-intro-mobile.svg"
                            alt=""
                            className="w-full"
                        />
                    </div>
                    <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[400px]">
                        <img
                            src="/images/image-mockups.png"
                            alt="Mobile banking app mockups"
                            className="w-full"
                        />
                    </div>
                </div>

                <div className="mx-auto max-w-7xl px-0 relative z-10 md:min-h-[80vh] flex items-center">
                    <div className="flex flex-col md:flex-row items-center w-full">
                        {/* Content */}
                        <div className="w-full md:w-[45%] text-center md:text-left py-12 md:py-0">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-dark-blue mb-5 leading-tight">
                                Next generation digital banking
                            </h1>
                            <p className="text-grayish-blue mb-8 max-w-md mx-auto md:mx-0 md:max-w-lg text-lg">
                                Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
                            </p>
                            <div className="md:mt-4">
                                <Button text="Request Invite" className="" />
                            </div>
                        </div>

                        {/* Desktop background */}
                        <div className="hidden md:block md:w-[55%] absolute md:-right-[10%] lg:-right-[15%] xl:-right-[20%] top-0 h-full overflow-visible">
                            <div className="relative h-full z-50">
                                <img
                                    src="/images/bg-intro-desktop.svg"
                                    alt=""
                                    className="absolute -right-[20%] -top-[20%] w-[150%] max-w-none"
                                />
                                <img
                                    src="/images/image-mockups.png"
                                    alt="Mobile banking app mockups"
                                    className="absolute -right-[10%] -top-[10%] w-[120%] max-w-none z-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features section */}
            <section
                style={{
                    backgroundColor: theme === "dark" ? "#2d314d" : "#f4f5f7",
                    color: theme === "dark" ? "#fff" : "#6a7282"
                }}
                className="py-16 md:py-24 lg:py-32 px-5 sm:px-6 lg:px-[8%] 2xl:px-[130px]"
            >
                <div className="mx-auto max-w-7xl">
                    <div className="text-center md:text-left max-w-3xl mx-auto md:mx-0 mb-12 md:mb-16 lg:mb-20">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-dark-blue mb-5">
                            Why choose Easybank?
                        </h2>
                        <p className="text-grayish-blue text-lg">
                            We leverage Open Banking to turn your bank account into your financial hub.
                            Control your finances like never before.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
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
                    color: theme === "dark" ? "#fff" : "#6a7282"
                }}
                className="py-16 md:py-24 lg:py-32 px-5 sm:px-6 lg:px-[8%] 2xl:px-[130px]"
            >
                <div className="mx-auto max-w-7xl">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-dark-blue mb-12 md:mb-16 text-center md:text-left">
                        Latest Articles
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
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