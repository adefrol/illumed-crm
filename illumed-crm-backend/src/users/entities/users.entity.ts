import { Deal } from 'src/deal/entities/deal.entity'
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'


@Entity()
export class User {
    @PrimaryGeneratedColumn({ name: 'user_id'})
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    first_name: string;

    @Column() 
    last_name: string;

    @Column() 
    password:string;

/*     @OneToOne(() => Deal, (deal) => deal.user, {onUpdate: "NO ACTION"})
    @JoinColumn({name: "deal_id"})
    deal: Deal; */
}