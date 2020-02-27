/**
 * limited implementaton of classes required to implement Rectangle
 * class
 */

/**
 * Utility class Point used to standardize 2d locations
 */
export class Point {
    
    /**
     * Point constructor
     * @param  {integer} x
     * @param  {integer} y
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

/**
 * Base class Shape used to standardize verbs available for
 * 2D shapes
 */
export class Shape {
    
    /**
     * @param  {Point[]} pointArray Array of points required to determine our Shape
     */
    constructor(pointArray) {
        this.points = pointArray;
    };

    contains(aPoint) {
        throw "Must be implemented in child class";
    }
}

export class Rectangle extends Shape {
    /** Convention: 
     * the top left point is offset 0 in this->points
     * the bottom right point is offset 1 in this->points
     *  Code would be more readable with constants
    */

    /**
     * @param  {Point} topLeft     point describing top left corner of rectangle
     * @param  {Point} bottomRight point describing bottom right corner of rectangle
     */
    constructor(topLeft, bottomRight) {
        var points = [];
        points.push(topLeft);
        points.push(bottomRight);
        super(points);
    }

    
    /**
     * @param  {Point} aPoint a Point object which we'll determine is in the rectangle or not
     */
    contains(aPoint) {
        if (aPoint.y > this.points[1].y || aPoint.y < this.points[0].y
            || aPoint.x > this.points[0].x || aPoint.x < this.points[1].x)
            return false;
        return true;
    }
    /**
     * @param  {Rectangle} aRect  a rectangle whose points we are going to compare to this object
     */
    containsRectangle(aRect) {
        if (this.contains(aRect.points[0]) && this.contains(aRect.points[1]))
            return true;
        return false;
    };
    /**
     * @param  {} aRect a rectangle whose points we are going to compare to this object
     */
    intersectsRectangle(aRect){
        if ((this.contains(aRect.points[0]) || this.contains(aRect.points[1])) &&
            !this.containsRectangle(aRect))
            return true;
        return false;
    }
}