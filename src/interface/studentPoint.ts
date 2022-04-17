import { Point } from '@/models/point';

export interface StudentPoint {
  totalPoints: number;
  points?: Point[];
  student: {
    name: string;
    user: string;
    avatar: string;
  };
}
