import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Star, Bed, Bath, Square, Car, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Property {
  id: string
  title: string
  type: string
  price: number
  location: {
    neighborhood: string
    city: string
    state: string
  }
  details: {
    bedrooms: number
    bathrooms: number
    area: number
    parking: number
  }
  images: string[]
  rating: number
  reviewCount: number
  featured: boolean
}

interface PropertyCardProps {
  property: Property
  viewMode: "grid" | "list"
}

export function PropertyCard({ property, viewMode }: PropertyCardProps) {
  if (viewMode === "list") {
    return (
      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="p-0">
          <div className="flex">
            {/* Image */}
            <div className="relative w-80 h-48 flex-shrink-0">
              <Image
                src={property.images[0] || "/placeholder.svg"}
                alt={property.title}
                fill
                className="object-cover rounded-l-lg"
              />
              {property.featured && <Badge className="absolute top-3 left-3 bg-green-600">Destaque</Badge>}
              <Button variant="secondary" size="icon" className="absolute top-3 right-3 bg-white/80 hover:bg-white">
                <Heart className="h-4 w-4" />
              </Button>
            </div>

            {/* Content */}
            <div className="flex-1 p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <Link href={`/imovel/${property.id}`}>
                    <h3 className="text-xl font-semibold hover:text-green-600 transition-colors">{property.title}</h3>
                  </Link>
                  <div className="flex items-center text-gray-600 mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>
                      {property.location.neighborhood}, {property.location.city}
                    </span>
                  </div>
                  <Badge variant="outline" className="mt-2">
                    {property.type}
                  </Badge>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">R$ {property.price.toLocaleString("pt-BR")}</div>
                  <div className="text-gray-500 text-sm">por mês</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <Bed className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{property.details.bedrooms}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Bath className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{property.details.bathrooms}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Square className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{property.details.area}m²</span>
                </div>
                {property.details.parking > 0 && (
                  <div className="flex items-center space-x-1">
                    <Car className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{property.details.parking}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{property.rating}</span>
                  <span className="text-sm text-gray-500">({property.reviewCount} avaliações)</span>
                </div>
                <Link href={`/imovel/${property.id}`}>
                  <Button className="bg-green-600 hover:bg-green-700">Ver Detalhes</Button>
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        {/* Image */}
        <div className="relative aspect-[4/3]">
          <Image
            src={property.images[0] || "/placeholder.svg"}
            alt={property.title}
            fill
            className="object-cover rounded-t-lg"
          />
          {property.featured && <Badge className="absolute top-3 left-3 bg-green-600">Destaque</Badge>}
          <Button variant="secondary" size="icon" className="absolute top-3 right-3 bg-white/80 hover:bg-white">
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex justify-between items-start mb-3">
            <div className="flex-1">
              <Link href={`/imovel/${property.id}`}>
                <h3 className="font-semibold text-lg hover:text-green-600 transition-colors line-clamp-1">
                  {property.title}
                </h3>
              </Link>
              <div className="flex items-center text-gray-600 mt-1">
                <MapPin className="h-3 w-3 mr-1" />
                <span className="text-sm">{property.location.neighborhood}</span>
              </div>
            </div>
            <Badge variant="outline" className="ml-2">
              {property.type}
            </Badge>
          </div>

          <div className="text-2xl font-bold text-green-600 mb-3">
            R$ {property.price.toLocaleString("pt-BR")}
            <span className="text-sm text-gray-500 font-normal">/mês</span>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <Bed className="h-3 w-3" />
                <span>{property.details.bedrooms}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Bath className="h-3 w-3" />
                <span>{property.details.bathrooms}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Square className="h-3 w-3" />
                <span>{property.details.area}m²</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium">{property.rating}</span>
              <span className="text-sm text-gray-500">({property.reviewCount})</span>
            </div>
            <Link href={`/imovel/${property.id}`}>
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                Ver Detalhes
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
