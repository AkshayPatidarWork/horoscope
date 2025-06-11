import {
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  Table,
  BelongsTo,
  Index,
} from 'sequelize-typescript';
import { User } from './user.model';

@Table({
  tableName: 'horoscope_history',
})
export class HoroscopeHistory extends Model<HoroscopeHistory> {
  @ForeignKey(() => User)
  @Index('unique_user_date') // Composite index
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @Index('unique_user_date')
  @Column({
    type: DataType.DATEONLY,
  })
  date: string;

  @Column(DataType.TEXT)
  description: string;

  @CreatedAt
  createdAt: Date;
}
