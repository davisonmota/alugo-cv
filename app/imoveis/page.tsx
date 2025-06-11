"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { PropertyCard } from "@/components/property-card"
import { Search, SlidersHorizontal, Grid, List } from "lucide-react"
import Link from "next/link"
import { PropertyFilters as PropertyFiltersComponent } from "@/components/property-filters"

// Dados mockados para demonstração
const mockProperties = [
  {
    id: "1",
    title: "Apartamento Moderno no Centro",
    type: "Apartamento",
    price: 2500,
    location: { neighborhood: "Centro", city: "São Paulo", state: "SP" },
    details: { bedrooms: 2, bathrooms: 1, area: 65, parking: 1 },
    images: ["/placeholder.svg?height=300&width=400"],
    rating: 4.8,
    reviewCount: 12,
    featured: true,
  },
  {
    id: "2",
    title: "Casa Espaçosa em Condomínio",
    type: "Casa",
    price: 3200,
    location: { neighborhood: "Vila Madalena", city: "São Paulo", state: "SP" },
    details: { bedrooms: 3, bathrooms: 2, area: 120, parking: 2 },
    images: ["/placeholder.svg?height=300&width=400"],
    rating: 4.9,
    reviewCount: 8,
    featured: false,
  },
  {
    id: "3",
    title: "Kitnet Próxima ao Metrô",
    type: "Kitnet",
    price: 1200,
    location: { neighborhood: "Liberdade", city: "São Paulo", state: "SP" },
    details: { bedrooms: 1, bathrooms: 1, area: 25, parking: 0 },
    images: ["/placeholder.svg?height=300&width=400"],
    rating: 4.2,
    reviewCount: 15,
    featured: false,
  },
  {
    id: "4",
    title: "Loft Industrial Reformado",
    type: "Loft",
    price: 2800,
    location: { neighborhood: "Pinheiros", city: "São Paulo", state: "SP" },
    details: { bedrooms: 1, bathrooms: 1, area: 80, parking: 1 },
    images: ["/placeholder.svg?height=300&width=400"],
    rating: 4.6,
    reviewCount: 6,
    featured: true,
  },
  {
    id: "5",
    title: "Apartamento com Vista",
    type: "Apartamento",
    price: 3500,
    location: { neighborhood: "Moema", city: "São Paulo", state: "SP" },
    details: { bedrooms: 3, bathrooms: 2, area: 95, parking: 2 },
    images: ["/placeholder.svg?height=300&width=400"],
    rating: 4.7,
    reviewCount: 10,
    featured: false,
  },
  {
    id: "6",
    title: "Casa com Quintal",
    type: "Casa",
    price: 2200,
    location: { neighborhood: "Vila Olímpia", city: "São Paulo", state: "SP" },
    details: { bedrooms: 2, bathrooms: 1, area: 85, parking: 1 },
    images: ["/placeholder.svg?height=300&width=400"],
    rating: 4.4,
    reviewCount: 9,
    featured: false,
  },
  {
    id: "7",
    title: "Apartamento Novo",
    type: "Apartamento",
    price: 1800,
    location: { neighborhood: "Bela Vista", city: "São Paulo", state: "SP" },
    details: { bedrooms: 1, bathrooms: 1, area: 45, parking: 1 },
    images: ["/placeholder.svg?height=300&width=400"],
    rating: 4.5,
    reviewCount: 7,
    featured: false,
  },
  {
    id: "8",
    title: "Cobertura Duplex",
    type: "Cobertura",
    price: 5500,
    location: { neighborhood: "Jardins", city: "São Paulo", state: "SP" },
    details: { bedrooms: 4, bathrooms: 3, area: 180, parking: 3 },
    images: ["/placeholder.svg?height=300&width=400"],
    rating: 4.9,
    reviewCount: 4,
    featured: true,
  },
]

interface PropertyFiltersInterface {
  search: string
  neighborhood: string
  propertyType: string
  minPrice: string
  maxPrice: string
  bedrooms: string
  sortBy: string
}

export function PropertyFilters() {
  return null
}

export default function PropertiesPage() {
  const [filters, setFilters] = useState<PropertyFiltersInterface>({
    search: "",
    neighborhood: "all",
    propertyType: "all",
    minPrice: "",
    maxPrice: "",
    bedrooms: "any",
    sortBy: "featured",
  })

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)

  // Filtrar e ordenar propriedades
  const filteredProperties = useMemo(() => {
    const filtered = mockProperties.filter((property) => {
      const matchesSearch =
        filters.search === "" ||
        property.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        property.location.neighborhood.toLowerCase().includes(filters.search.toLowerCase())

      const matchesNeighborhood =
        filters.neighborhood === "" ||
        filters.neighborhood === "all" ||
        property.location.neighborhood === filters.neighborhood

      const matchesType =
        filters.propertyType === "" || filters.propertyType === "all" || property.type === filters.propertyType

      const matchesMinPrice = filters.minPrice === "" || property.price >= Number(filters.minPrice)

      const matchesMaxPrice = filters.maxPrice === "" || property.price <= Number(filters.maxPrice)

      const matchesBedrooms =
        filters.bedrooms === "" || filters.bedrooms === "any" || property.details.bedrooms >= Number(filters.bedrooms)

      return (
        matchesSearch && matchesNeighborhood && matchesType && matchesMinPrice && matchesMaxPrice && matchesBedrooms
      )
    })

    // Ordenar
    switch (filters.sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "featured":
      default:
        filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1
          if (!a.featured && b.featured) return 1
          return b.rating - a.rating
        })
        break
    }

    return filtered
  }, [filters])

  const updateFilter = (key: keyof PropertyFiltersInterface, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => {
    setFilters({
      search: "",
      neighborhood: "all",
      propertyType: "all",
      minPrice: "",
      maxPrice: "",
      bedrooms: "any",
      sortBy: "featured",
    })
  }

  const activeFiltersCount = Object.entries(filters).filter(([key, value]) => {
    if (key === "sortBy") return false
    if (key === "neighborhood" && (value === "" || value === "all")) return false
    if (key === "propertyType" && (value === "" || value === "all")) return false
    if (key === "bedrooms" && (value === "" || value === "any")) return false
    return value !== ""
  }).length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">AluGO!</span>
            </Link>

            <div className="flex items-center space-x-4">
              <Button variant="outline">Anunciar Imóvel</Button>
              <Button className="bg-green-600 hover:bg-green-700">Entrar</Button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Buscar por bairro, tipo de imóvel ou palavra-chave..."
                value={filters.search}
                onChange={(e) => updateFilter("search", e.target.value)}
                className="pl-10"
              />
            </div>

            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2"
            >
              <SlidersHorizontal className="h-4 w-4" />
              <span>Filtros</span>
              {activeFiltersCount > 0 && (
                <Badge variant="secondary" className="ml-1">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>

            <div className="flex items-center border rounded-lg">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-80 flex-shrink-0">
              <PropertyFiltersComponent filters={filters} onFilterChange={updateFilter} onClearFilters={clearFilters} />
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{filteredProperties.length} imóveis encontrados</h1>
                <p className="text-gray-600">
                  {filters.search && `Resultados para "${filters.search}"`}
                  {filters.neighborhood && ` em ${filters.neighborhood}`}
                </p>
              </div>

              <Select value={filters.sortBy} onValueChange={(value) => updateFilter("sortBy", value)}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Destaques</SelectItem>
                  <SelectItem value="price-asc">Menor preço</SelectItem>
                  <SelectItem value="price-desc">Maior preço</SelectItem>
                  <SelectItem value="rating">Melhor avaliação</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Active Filters */}
            {activeFiltersCount > 0 && (
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-sm text-gray-600">Filtros ativos:</span>
                {filters.neighborhood && (
                  <Badge variant="secondary" className="flex items-center space-x-1">
                    <span>{filters.neighborhood}</span>
                    <button
                      onClick={() => updateFilter("neighborhood", "")}
                      className="ml-1 hover:bg-gray-300 rounded-full p-0.5"
                    >
                      ×
                    </button>
                  </Badge>
                )}
                {filters.propertyType && (
                  <Badge variant="secondary" className="flex items-center space-x-1">
                    <span>{filters.propertyType}</span>
                    <button
                      onClick={() => updateFilter("propertyType", "")}
                      className="ml-1 hover:bg-gray-300 rounded-full p-0.5"
                    >
                      ×
                    </button>
                  </Badge>
                )}
                {(filters.minPrice || filters.maxPrice) && (
                  <Badge variant="secondary" className="flex items-center space-x-1">
                    <span>
                      R$ {filters.minPrice || "0"} - {filters.maxPrice || "∞"}
                    </span>
                    <button
                      onClick={() => {
                        updateFilter("minPrice", "")
                        updateFilter("maxPrice", "")
                      }}
                      className="ml-1 hover:bg-gray-300 rounded-full p-0.5"
                    >
                      ×
                    </button>
                  </Badge>
                )}
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Limpar todos
                </Button>
              </div>
            )}

            {/* Properties Grid/List */}
            {filteredProperties.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Nenhum imóvel encontrado</h3>
                <p className="text-gray-600 mb-4">Tente ajustar os filtros ou buscar por outros termos.</p>
                <Button onClick={clearFilters}>Limpar filtros</Button>
              </div>
            ) : (
              <div
                className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}
              >
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} viewMode={viewMode} />
                ))}
              </div>
            )}

            {/* Load More / Pagination */}
            {filteredProperties.length > 0 && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Carregar mais imóveis
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
