"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import type { PropertyFilters as PropertyFiltersType } from "@/app/imoveis/page"

interface PropertyFiltersProps {
  filters: PropertyFiltersType
  onFilterChange: (key: keyof PropertyFiltersType, value: string) => void
  onClearFilters: () => void
}

export function PropertyFilters({ filters, onFilterChange, onClearFilters }: PropertyFiltersProps) {
  const neighborhoods = [
    "Centro",
    "Vila Madalena",
    "Liberdade",
    "Pinheiros",
    "Moema",
    "Vila Olímpia",
    "Bela Vista",
    "Jardins",
  ]

  const propertyTypes = ["Apartamento", "Casa", "Kitnet", "Loft", "Cobertura"]

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Filtros</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClearFilters}>
            Limpar
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Bairro */}
        <div>
          <Label htmlFor="neighborhood">Bairro</Label>
          <Select value={filters.neighborhood} onValueChange={(value) => onFilterChange("neighborhood", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o bairro" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os bairros</SelectItem>
              {neighborhoods.map((neighborhood) => (
                <SelectItem key={neighborhood} value={neighborhood}>
                  {neighborhood}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Separator />

        {/* Tipo de Imóvel */}
        <div>
          <Label htmlFor="propertyType">Tipo de Imóvel</Label>
          <Select value={filters.propertyType} onValueChange={(value) => onFilterChange("propertyType", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os tipos</SelectItem>
              {propertyTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Separator />

        {/* Faixa de Preço */}
        <div>
          <Label>Faixa de Preço (R$)</Label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div>
              <Label htmlFor="minPrice" className="text-xs text-gray-500">
                Mínimo
              </Label>
              <Input
                id="minPrice"
                type="number"
                placeholder="0"
                value={filters.minPrice}
                onChange={(e) => onFilterChange("minPrice", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="maxPrice" className="text-xs text-gray-500">
                Máximo
              </Label>
              <Input
                id="maxPrice"
                type="number"
                placeholder="10000"
                value={filters.maxPrice}
                onChange={(e) => onFilterChange("maxPrice", e.target.value)}
              />
            </div>
          </div>
        </div>

        <Separator />

        {/* Quartos */}
        <div>
          <Label htmlFor="bedrooms">Quartos (mínimo)</Label>
          <Select value={filters.bedrooms} onValueChange={(value) => onFilterChange("bedrooms", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Qualquer quantidade" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Qualquer quantidade</SelectItem>
              <SelectItem value="1">1+ quarto</SelectItem>
              <SelectItem value="2">2+ quartos</SelectItem>
              <SelectItem value="3">3+ quartos</SelectItem>
              <SelectItem value="4">4+ quartos</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator />

        {/* Filtros Rápidos */}
        <div>
          <Label className="text-sm font-medium">Filtros Rápidos</Label>
          <div className="grid grid-cols-1 gap-2 mt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                onFilterChange("maxPrice", "2000")
                onFilterChange("propertyType", "all")
              }}
            >
              Até R$ 2.000
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                onFilterChange("propertyType", "Apartamento")
                onFilterChange("bedrooms", "2")
              }}
            >
              Apartamento 2+ quartos
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                onFilterChange("neighborhood", "Centro")
                onFilterChange("propertyType", "all")
              }}
            >
              Centro da cidade
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
