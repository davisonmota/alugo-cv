import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Filter, DollarSign, Camera, Star, Map, Search } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">AluGO!</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#funcionalidades" className="text-gray-600 hover:text-green-600">
              Funcionalidades
            </Link>
            <Link href="#como-funciona" className="text-gray-600 hover:text-green-600">
              Como Funciona
            </Link>
            <Link href="#contato" className="text-gray-600 hover:text-green-600">
              Contato
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline">Entrar</Button>
            <Button className="bg-green-600 hover:bg-green-700">Cadastrar</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Encontre o <span className="text-green-600">imóvel perfeito</span> para alugar
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A plataforma mais completa para encontrar seu próximo lar. Filtros inteligentes, avaliações reais e
            localização precisa em um só lugar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/imoveis">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
                <Search className="mr-2 h-5 w-5" />
                Começar Busca
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3">
              Anunciar Imóvel
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="funcionalidades" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tudo que você precisa em um só lugar</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Desenvolvemos as ferramentas mais avançadas para tornar sua busca por imóveis mais eficiente e segura.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Filtro por Bairro</h3>
                <p className="text-gray-600">
                  Encontre imóveis na região que você deseja morar. Busque por bairros específicos e descubra as
                  melhores opções da área.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Filtro por Preço</h3>
                <p className="text-gray-600">
                  Defina seu orçamento e encontre imóveis que cabem no seu bolso. Filtros inteligentes para otimizar sua
                  busca.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Filter className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Filtro por Tipo</h3>
                <p className="text-gray-600">
                  Apartamento, casa, kitnet ou loft? Filtre por tipo de imóvel e encontre exatamente o que procura.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Camera className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fotos e Descrições</h3>
                <p className="text-gray-600">
                  Galeria completa de fotos em alta qualidade e descrições detalhadas de cada imóvel para você conhecer
                  antes de visitar.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Avaliações Reais</h3>
                <p className="text-gray-600">
                  Leia avaliações de inquilinos anteriores e tome decisões mais informadas sobre o imóvel e o
                  proprietário.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Map className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Mapa e Localização</h3>
                <p className="text-gray-600">
                  Visualize a localização exata dos imóveis no mapa e explore a vizinhança, transporte público e pontos
                  de interesse.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="como-funciona" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Como funciona o AluGO!</h2>
            <p className="text-xl text-gray-600">Em apenas 3 passos simples você encontra seu novo lar</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Defina seus Filtros</h3>
              <p className="text-gray-600">
                Configure bairro, preço, tipo de imóvel e outras preferências para personalizar sua busca.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Explore os Resultados</h3>
              <p className="text-gray-600">
                Navegue pelas opções, veja fotos, leia descrições e avaliações de outros inquilinos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Entre em Contato</h3>
              <p className="text-gray-600">
                Encontrou o imóvel ideal? Entre em contato direto com o proprietário e agende uma visita.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">10k+</div>
              <div className="text-gray-600">Imóveis Disponíveis</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">5k+</div>
              <div className="text-gray-600">Usuários Cadastrados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfação dos Usuários</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Bairros Cobertos</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Pronto para encontrar seu novo lar?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já encontraram o imóvel perfeito através do AluGO!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/imoveis">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-3">
                Começar Agora
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-3"
            >
              Saber Mais
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-2xl font-bold">AluGO!</span>
              </div>
              <p className="text-gray-400">A plataforma mais completa para encontrar imóveis para alugar.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Funcionalidades
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Como Funciona
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Preços
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Central de Ajuda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contato
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Carreiras
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AluGO!. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
