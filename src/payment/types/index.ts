import { ApiProperty } from "@nestjs/swagger";


export class MakePaymentResponse {
    @ApiProperty({example: '2c57500d-000f-5000-a000-1c5e5d18227d'})
    id: string
    @ApiProperty({example: 'pending'})
    status: string
    @ApiProperty({example: {
                 "value": "100.00",
                 "currency": "RUB"
                }})
    amount: object

    @ApiProperty({example: 'order №1'})
    description: string
    @ApiProperty({example: {
                 "account_id": "237033",
                 "gateway_id": "2106528"
             }})
    recipient: string
    @ApiProperty({example: '2023-07-29T16:20:29.596Z'})
    created_at: string
    @ApiProperty({example: {
                 "type": "redirect",
                 "confirmation_url": "https://yoomoney.ru/checkout/payments/v2/contract?orderId=2c57500d-000f-5000-a000-1c5e5d18227d"
             }})
    confirmation: object
    @ApiProperty({example: true})
    test: boolean
    @ApiProperty({example: true})
    paid: boolean
    @ApiProperty({example: true})
    refundable: boolean
    @ApiProperty({example: {}})
    metadata: object
    

}