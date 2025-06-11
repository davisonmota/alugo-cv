import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Star, Phone, MessageCircle, Home, Bed, Bath, Square, Car, ChevronLeft, Calendar } from "lucide-react"
import Link from "next/link"
import { PropertyGallery } from "@/components/property-gallery"
import { ContactForm } from "@/components/contact-form"

// Dados mockados para demonstração
const propertyData = {
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
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ],
  owner: {
    name: "Maria Silva",
    avatar: "/placeholder.svg?height=60&width=60",
    phone: "(11) 99999-9999",
    memberSince: "2022",
    rating: 4.8,
    totalProperties: 5,
  },
  reviews: [
    {
      id: 1,
      tenant: "João Santos",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "Dezembro 2023",
      comment: "Excelente apartamento! Muito bem localizado e a proprietária é super atenciosa. Recomendo!",
    },
    {
      id: 2,
      tenant: "Ana Costa",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4,
      date: "Outubro 2023",
      comment: "Apartamento bem conservado e em ótima localização. Apenas o banheiro poderia ser um pouco maior.",
    },
    {
      id: 3,
      tenant: "Carlos Oliveira",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "Agosto 2023",
      comment: "Morei por 2 anos e foi uma ótima experiência. Proprietária muito responsável e apartamento impecável.",
    },
  ],
}

export default function PropertyPage() {
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
