import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Star, Phone, MessageCircle, Home, Bed, Bath, Square, Car, ChevronLeft, Calendar } from "lucide-react"
import Link from "next/link"
import { PropertyGallery } from "@/components/property-gallery"
import { ContactForm } from "@/components/contact-form"

// Atualizar os dados mockados para usar as imagens reais baseado no ID
const getPropertyData = (id: string) => {
  const properties = {
    "1": {
      id: "1",
      title: "Apartamento Moderno no Centro",
      type: "Apartamento",
      price: 2500,
      location: {
        neighborhood: "Centro",
        city: "São Paulo",
        state: "SP",
      },
      details: {
        bedrooms: 2,
        bathrooms: 1,
        area: 65,
        parking: 1,
      },
      description:
        "Apartamento completamente reformado em excelente localização. Próximo ao metrô, shopping centers e principais avenidas da cidade. Ideal para profissionais que trabalham no centro.",
      amenities: ["Portaria 24h", "Elevador", "Área de lazer", "Academia"],
      images: [
        "/img-anuncios/Apartamento moderno no centro/apartamentocentro1.jpg",
        "/img-anuncios/Apartamento moderno no centro/apartamentocentro2.jpg",
        "/img-anuncios/Apartamento moderno no centro/apartamentocentro3.jpg",
        "/img-anuncios/Apartamento moderno no centro/apartamentocentro4.jpg",
        "/img-anuncios/Apartamento moderno no centro/apartamentocentro5.png",
      ],
      owner: {
        name: "Maria Silva",
        avatar: "/placeholder-user.jpg",
        phone: "(11) 99999-9999",
        memberSince: "2022",
        rating: 4.8,
        totalProperties: 5,
      },
      reviews: [
        {
          id: 1,
          tenant: "João Santos",
          avatar: "/placeholder-user.jpg",
          rating: 5,
          date: "Dezembro 2023",
          comment: "Excelente apartamento! Muito bem localizado e a proprietária é super atenciosa. Recomendo!",
        },
        {
          id: 2,
          tenant: "Ana Costa",
          avatar: "/placeholder-user.jpg",
          rating: 4,
          date: "Outubro 2023",
          comment: "Apartamento bem conservado e em ótima localização. Apenas o banheiro poderia ser um pouco maior.",
        },
        {
          id: 3,
          tenant: "Carlos Oliveira",
          avatar: "/placeholder-user.jpg",
          rating: 5,
          date: "Agosto 2023",
          comment:
            "Morei por 2 anos e foi uma ótima experiência. Proprietária muito responsável e apartamento impecável.",
        },
      ],
    },
    "2": {
      id: "2",
      title: "Casa Espaçosa em Condomínio",
      type: "Casa",
      price: 3200,
      location: {
        neighborhood: "Vila Madalena",
        city: "São Paulo",
        state: "SP",
      },
      details: {
        bedrooms: 3,
        bathrooms: 2,
        area: 120,
        parking: 2,
      },
      description:
        "Casa ampla em condomínio fechado com área de lazer completa. Ideal para famílias que buscam segurança e conforto.",
      amenities: ["Piscina", "Quadra", "Playground", "Segurança 24h"],
      images: [
        "/img-anuncios/Casa espaçosa em condomínio/casacondominio1.jpg",
        "/img-anuncios/Casa espaçosa em condomínio/casacondominio2.jpg",
        "/img-anuncios/Casa espaçosa em condomínio/casacondominio3.jpg",
        "/img-anuncios/Casa espaçosa em condomínio/casacondominio4jpg.jpg",
        "/img-anuncios/Casa espaçosa em condomínio/casacondominio5.jpg",
        "/img-anuncios/Casa espaçosa em condomínio/casacondominio6.png",
        "/img-anuncios/Casa espaçosa em condomínio/casacondominio7.png",
        "/img-anuncios/Casa espaçosa em condomínio/casacondominio8.jpg",
      ],
      owner: {
        name: "Roberto Santos",
        avatar: "/placeholder-user.jpg",
        phone: "(11) 98888-8888",
        memberSince: "2021",
        rating: 4.9,
        totalProperties: 3,
      },
      reviews: [
        {
          id: 1,
          tenant: "Família Silva",
          avatar: "/placeholder-user.jpg",
          rating: 5,
          date: "Janeiro 2024",
          comment: "Casa perfeita para nossa família! Condomínio muito seguro e bem localizado.",
        },
      ],
    },
    "3": {
      id: "3",
      title: "Kitnet Próxima ao Metrô",
      type: "Kitnet",
      price: 1200,
      location: {
        neighborhood: "Liberdade",
        city: "São Paulo",
        state: "SP",
      },
      details: {
        bedrooms: 1,
        bathrooms: 1,
        area: 25,
        parking: 0,
      },
      description:
        "Kitnet compacta e funcional, ideal para estudantes ou profissionais solteiros. Localizada a poucos metros da estação de metrô.",
      amenities: ["Próximo ao metrô", "Mobiliada", "Internet incluída"],
      images: [
        "/img-anuncios/Kintet proxima ao metro/kitnet1.jpg",
        "/img-anuncios/Kintet proxima ao metro/kitnet2.jpeg",
        "/img-anuncios/Kintet proxima ao metro/kitnet3.png",
      ],
      owner: {
        name: "Carlos Yamamoto",
        avatar: "/placeholder-user.jpg",
        phone: "(11) 97777-7777",
        memberSince: "2023",
        rating: 4.2,
        totalProperties: 2,
      },
      reviews: [
        {
          id: 1,
          tenant: "Pedro Oliveira",
          avatar: "/placeholder-user.jpg",
          rating: 4,
          date: "Novembro 2023",
          comment: "Ótima localização, muito próximo do metrô. Ideal para quem trabalha no centro.",
        },
      ],
    },
    "4": {
      id: "4",
      title: "Loft Industrial Reformado",
      type: "Loft",
      price: 2800,
      location: {
        neighborhood: "Pinheiros",
        city: "São Paulo",
        state: "SP",
      },
      details: {
        bedrooms: 1,
        bathrooms: 1,
        area: 80,
        parking: 1,
      },
      description:
        "Loft com design industrial moderno, pé direito alto e muito charme. Perfeito para quem aprecia arquitetura diferenciada.",
      amenities: ["Design moderno", "Pé direito alto", "Área gourmet"],
      images: ["/img-anuncios/Loft industrial reformado/loft1.jpg"],
      owner: {
        name: "Ana Beatriz",
        avatar: "/placeholder-user.jpg",
        phone: "(11) 96666-6666",
        memberSince: "2022",
        rating: 4.6,
        totalProperties: 1,
      },
      reviews: [
        {
          id: 1,
          tenant: "Lucas Ferreira",
          avatar: "/placeholder-user.jpg",
          rating: 5,
          date: "Setembro 2023",
          comment: "Loft incrível! Design único e muito bem localizado. Recomendo!",
        },
      ],
    },
    "5": {
      id: "5",
      title: "Apartamento com Vista",
      type: "Apartamento",
      price: 3500,
      location: {
        neighborhood: "Moema",
        city: "São Paulo",
        state: "SP",
      },
      details: {
        bedrooms: 3,
        bathrooms: 2,
        area: 95,
        parking: 2,
      },
      description:
        "Apartamento com vista panorâmica da cidade, acabamentos de primeira qualidade e localização privilegiada em Moema.",
      amenities: ["Vista panorâmica", "Varanda", "Academia", "Piscina"],
      images: [
        "/img-anuncios/Apartamento com vista/apartamentovista1.jpg",
        "/img-anuncios/Apartamento com vista/apartamentovista2.jpg",
        "/img-anuncios/Apartamento com vista/apartamentovista3.jpg",
        "/img-anuncios/Apartamento com vista/apartamentovista4.jpg",
      ],
      owner: {
        name: "Patricia Lima",
        avatar: "/placeholder-user.jpg",
        phone: "(11) 95555-5555",
        memberSince: "2020",
        rating: 4.7,
        totalProperties: 4,
      },
      reviews: [
        {
          id: 1,
          tenant: "Casal Rodrigues",
          avatar: "/placeholder-user.jpg",
          rating: 5,
          date: "Dezembro 2023",
          comment: "Vista incrível! Apartamento muito bem cuidado e proprietária atenciosa.",
        },
      ],
    },
    "6": {
      id: "6",
      title: "Casa com Quintal",
      type: "Casa",
      price: 2200,
      location: {
        neighborhood: "Vila Olímpia",
        city: "São Paulo",
        state: "SP",
      },
      details: {
        bedrooms: 2,
        bathrooms: 1,
        area: 85,
        parking: 1,
      },
      description:
        "Casa aconchegante com quintal amplo, ideal para quem tem pets ou gosta de área externa. Localizada em rua tranquila.",
      amenities: ["Quintal amplo", "Pet friendly", "Churrasqueira", "Jardim"],
      images: [
        "/img-anuncios/Casa com quintal/casaquintal1.png",
        "/img-anuncios/Casa com quintal/casaquintal2.jpeg",
        "/img-anuncios/Casa com quintal/casaquintal3.jpg",
        "/img-anuncios/Casa com quintal/casaquintal4.jpg",
        "/img-anuncios/Casa com quintal/casaquintal5.jpg",
        "/img-anuncios/Casa com quintal/casaquintal6.jpg",
        "/img-anuncios/Casa com quintal/casaquintal7.jpg",
      ],
      owner: {
        name: "Fernando Costa",
        avatar: "/placeholder-user.jpg",
        phone: "(11) 94444-4444",
        memberSince: "2021",
        rating: 4.4,
        totalProperties: 2,
      },
      reviews: [
        {
          id: 1,
          tenant: "Família Almeida",
          avatar: "/placeholder-user.jpg",
          rating: 4,
          date: "Outubro 2023",
          comment: "Casa perfeita para nossa família e nossos pets. Quintal maravilhoso!",
        },
      ],
    },
    "7": {
      id: "7",
      title: "Apartamento Novo",
      type: "Apartamento",
      price: 1800,
      location: {
        neighborhood: "Bela Vista",
        city: "São Paulo",
        state: "SP",
      },
      details: {
        bedrooms: 1,
        bathrooms: 1,
        area: 45,
        parking: 1,
      },
      description:
        "Apartamento completamente novo, nunca habitado. Acabamentos modernos e localização central com fácil acesso a transporte público.",
      amenities: ["Nunca habitado", "Acabamentos novos", "Mobiliado", "Portaria"],
      images: [
        "/img-anuncios/Apartamento novo/apartamentonovo1.jpg",
        "/img-anuncios/Apartamento novo/apartamentonovo2.jpg",
        "/img-anuncios/Apartamento novo/apartamentonovo3.jpg",
        "/img-anuncios/Apartamento novo/apartamentonovo4.jpeg",
        "/img-anuncios/Apartamento novo/apartamentonovo5.jpg",
      ],
      owner: {
        name: "Juliana Mendes",
        avatar: "/placeholder-user.jpg",
        phone: "(11) 93333-3333",
        memberSince: "2023",
        rating: 4.5,
        totalProperties: 1,
      },
      reviews: [
        {
          id: 1,
          tenant: "Rafael Santos",
          avatar: "/placeholder-user.jpg",
          rating: 5,
          date: "Janeiro 2024",
          comment: "Apartamento impecável! Tudo novo e muito bem localizado.",
        },
      ],
    },
    "8": {
      id: "8",
      title: "Cobertura Duplex",
      type: "Cobertura",
      price: 5500,
      location: {
        neighborhood: "Jardins",
        city: "São Paulo",
        state: "SP",
      },
      details: {
        bedrooms: 4,
        bathrooms: 3,
        area: 180,
        parking: 3,
      },
      description:
        "Cobertura duplex de luxo com terraço privativo e vista privilegiada. Acabamentos de alto padrão em localização nobre.",
      amenities: ["Terraço privativo", "Vista privilegiada", "Piscina privativa", "Sauna"],
      images: [
        "/img-anuncios/Duplex Cobertura/cobertura1.jpg",
        "/img-anuncios/Duplex Cobertura/cobertura2.jpg",
        "/img-anuncios/Duplex Cobertura/cobertura3.jpg",
        "/img-anuncios/Duplex Cobertura/cobertura4.jpg",
        "/img-anuncios/Duplex Cobertura/cobertura5.jpg",
      ],
      owner: {
        name: "Eduardo Silveira",
        avatar: "/placeholder-user.jpg",
        phone: "(11) 92222-2222",
        memberSince: "2019",
        rating: 4.9,
        totalProperties: 6,
      },
      reviews: [
        {
          id: 1,
          tenant: "Empresário Silva",
          avatar: "/placeholder-user.jpg",
          rating: 5,
          date: "Novembro 2023",
          comment: "Cobertura excepcional! Luxo e conforto em todos os detalhes.",
        },
      ],
    },
  }

  return properties[id as keyof typeof properties] || properties["1"]
}

const propertyData = getPropertyData("1") // Você pode usar params.id aqui quando implementar roteamento dinâmico

export default function PropertyPage({ params }: { params: { id: string } }) {
  const propertyData = getPropertyData(params.id)
  const averageRating =
    propertyData.reviews.reduce((acc, review) => acc + review.rating, 0) / propertyData.reviews.length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/imoveis" className="flex items-center space-x-2">
            <ChevronLeft className="h-5 w-5" />
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">AluGO!</span>
            </div>
          </Link>
          <Button className="bg-green-600 hover:bg-green-700">
            <MessageCircle className="mr-2 h-4 w-4" />
            Entrar em Contato
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <PropertyGallery images={propertyData.images} />

            {/* Property Info */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{propertyData.title}</h1>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>
                        {propertyData.location.neighborhood}, {propertyData.location.city} -{" "}
                        {propertyData.location.state}
                      </span>
                    </div>
                    <Badge variant="secondary" className="mb-4">
                      <Home className="h-3 w-3 mr-1" />
                      {propertyData.type}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-600">
                      R$ {propertyData.price.toLocaleString("pt-BR")}
                    </div>
                    <div className="text-gray-500">por mês</div>
                  </div>
                </div>

                {/* Property Details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Bed className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">{propertyData.details.bedrooms} quartos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bath className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">{propertyData.details.bathrooms} banheiro</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Square className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">{propertyData.details.area}m²</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Car className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">{propertyData.details.parking} vaga</span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">Descrição</h3>
                  <p className="text-gray-600 leading-relaxed">{propertyData.description}</p>
                </div>

                {/* Amenities */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Comodidades</h3>
                  <div className="flex flex-wrap gap-2">
                    {propertyData.amenities.map((amenity, index) => (
                      <Badge key={index} variant="outline">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reviews Section */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold">Avaliações dos Inquilinos</h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(averageRating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-lg font-semibold">{averageRating.toFixed(1)}</span>
                    <span className="text-gray-500">({propertyData.reviews.length} avaliações)</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {propertyData.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 last:border-b-0 pb-6 last:pb-0">
                      <div className="flex items-start space-x-4">
                        <Avatar>
                          <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.tenant} />
                          <AvatarFallback>{review.tenant.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="font-semibold">{review.tenant}</h4>
                              <div className="flex items-center space-x-2">
                                <div className="flex items-center">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-gray-500">{review.date}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Owner Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Proprietário</h3>
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={propertyData.owner.avatar || "/placeholder.svg"} alt={propertyData.owner.name} />
                    <AvatarFallback>{propertyData.owner.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-lg">{propertyData.owner.name}</h4>
                    <div className="flex items-center space-x-1 mb-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{propertyData.owner.rating}</span>
                    </div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      Membro desde {propertyData.owner.memberSince}
                    </div>
                  </div>
                </div>

                <div className="text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Home className="h-4 w-4 mr-2" />
                    {propertyData.owner.totalProperties} imóveis anunciados
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Enviar Mensagem
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    {propertyData.owner.phone}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <ContactForm />

            {/* Quick Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Informações Rápidas</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tipo:</span>
                    <span className="font-medium">{propertyData.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Área:</span>
                    <span className="font-medium">{propertyData.details.area}m²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Quartos:</span>
                    <span className="font-medium">{propertyData.details.bedrooms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Banheiros:</span>
                    <span className="font-medium">{propertyData.details.bathrooms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Vagas:</span>
                    <span className="font-medium">{propertyData.details.parking}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
