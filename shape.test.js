import {Point, Rectangle} from './shape';

test('validate contains', () => {
     const p = new Point(3,5);
    expect(p.x).toBe(3);
    expect(p.y).toBe(5);
     const topLeft = new Point(4,1);
     var bottomRight = new Point(0,7);
     var rect = new Rectangle(topLeft, bottomRight);
     expect(rect.contains(p)).toBe(true);

 });