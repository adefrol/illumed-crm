import { Funnel } from 'src/purchase-funnel/entities/purchase-funnel.entity'
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Deal {
    @PrimaryGeneratedColumn({ name: 'deal_id'})
    id?: number;

    @Column()
    name: string;

    @Column() 
    deal_cost:number;

    @ManyToOne(() => Funnel, (funnel) => funnel.deals, {onUpdate: 'NO ACTION'})
    @JoinColumn({name: 'funnel_id'})
    funnel: Funnel
}