import {ApiProperty} from '@nestjs/swagger'
import { Op } from 'sequelize';

export class BoilerParts {
    @ApiProperty({example: 1 })
    id: number;

    @ApiProperty({example: 'Chaffoteax&Mary' })
    boiler_manufacturer: string

    @ApiProperty({example: 1860 })
    price: number

    @ApiProperty({example: "Gasoline" })
    parts_manufacturer: string

    @ApiProperty({example:  "riQmXZiadYN0OTO" })
    vendor_code: string

    @ApiProperty({example: "Doloremque tenetur." })
    name: string

    @ApiProperty({example: "Corrupti doloremque repudiandae quasi rem veritatis molestiae beatae minus dolorem." })
    description: string

    @ApiProperty({example: "https://picsum.photos/seed/HDjPlXVr/640/480?random=697633496993507209055761446843\",\"https://loremflickr.com/640/480?lock=3634466750726144?random=663933052905588031690557802019\",\"https://loremflickr.com/640/480?lock=7488362342514688?random=838316005163326185799527997441\",\"https://loremflickr.com/640/480?lock=1344688044900352?random=354141645625671395333310429473\",\"https://loremflickr.com/640/480?lock=7388882721046528?random=823798362966289484261746490855\",\"https://picsum.photos/seed/qX8Dz/640/480?random=385306427900483666268933032485\",\"https://loremflickr.com/640/480?lock=6196883823263744?random=817461144098683021211081747399\"]" })
    images: string

    @ApiProperty({example: 1 })
    in_stock: number

    @ApiProperty({example: false })
    bestseller: boolean

    @ApiProperty({example: false })
    new: boolean

    @ApiProperty({example: 766 })
    popularity: number

    @ApiProperty({example: "Ex laborum omnis assumenda numquam iusto nostrum." })
    compatibility: string

    @ApiProperty({example: "2023-05-21T18:11:07.000Z" })
    createdAt: string

    @ApiProperty({example: "2023-05-21T18:11:07.000Z" })
    updatedAt: string
}

export class PaginateAndFilterResponse {
   @ApiProperty({example: 10 })
   count: number;
   @ApiProperty({type: BoilerParts, isArray: true})
   rows: BoilerParts
}

export class Bestsellers extends BoilerParts {
    @ApiProperty({example: 1})
    bestseller: boolean;
}

export class GetBestsellersResponse extends PaginateAndFilterResponse {
    @ApiProperty({example: 10 })
   count: number;
   @ApiProperty({type: BoilerParts, isArray: true})
   rows: Bestsellers
}

export class NewParts extends BoilerParts {
    @ApiProperty({example: true})
    new: boolean;
}

export class GetNewResponse extends PaginateAndFilterResponse {
    @ApiProperty({example: 10 })
   count: number;
   @ApiProperty({type: BoilerParts, isArray: true})
   rows: NewParts
}

export class SeachByLetterResponse extends BoilerParts{
    @ApiProperty({example: "Doloremque tenetur." })
    name: string
}
export class SearchResponse extends PaginateAndFilterResponse {
    @ApiProperty({type: SeachByLetterResponse, isArray: true})
   rows: SeachByLetterResponse
}
export class SearchRequest {
    @ApiProperty({example: 'l' })
    search: string
}

export class GetByNameResponse extends BoilerParts {}
export class GetByNameRequest {
    @ApiProperty({example: "Doloremque tenetur." })
    name: string
}

export class FindOneResponse extends BoilerParts {}


export interface IBoilerPartsQuery {
    limit: string,
    offset:string,
    boiler:string | undefined,
    parts: string | undefined,
    priceFrom: string | undefined,
    priceTo: string | undefined,
}

export interface IBoilerPartsFilter {
    boiler_manufacturer: string | undefined
    parts_manufacturer: string | undefined
    price: {[Op.between] : number[]}
}

