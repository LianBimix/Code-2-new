namespace Asteroids {
    window.addEventListener("load", handleload);
    export let crc2: CanvasRenderingContext2D;
    export const lineWidth: number = 2;
    //const m: Moveable = new Moveable();
    //const a: Moveable = new Asteroid(1);
    //const p: Moveable = new Projectile(new Vector(0, 0), new Vector(0, 0));
    //const moveables: Moveable[] = [];
    //moveables.push(new Asteroid(1));
    //moveables.push(new Projectile(new Vector(0, 0), new Vector(0, 0)));

    const moveables: Moveable[] = [];

    function handleload(): void {
        console.log("Starting Asteroids!");
        const canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        crc2 = <CanvasRenderingContext2D>canvas?.getContext("2d");
        crc2.fillStyle = "#000000ff";
        crc2.strokeStyle = "#ff3232ff";
        crc2.lineWidth = lineWidth;

        createPaths();
        createAsteroids(5);
        //createShip();
        canvas.addEventListener("mouseup", shootProjectile);
        canvas.addEventListener("mousedown", shootLaser);
        //canvas.addEventListener("keypress", handleKeypress); 
        //canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20);
    }
    function shootProjectile(_event: MouseEvent): void {
        const origin: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        const velocity: Vector = new Vector(0, 0);
        velocity.random(100, 100);
        const projectile: Projectile = new Projectile(origin, velocity);
        moveables.push(projectile);
    }
    function shootLaser(_event: MouseEvent): void {
        console.log("Laser is shooting");
        const hotspot: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        const asteroidHit: Asteroid | null = getAsteroidHit(hotspot);
        if (asteroidHit) {
            breakAsteroid(asteroidHit);
        }
    }
    function getAsteroidHit(_hotspot: Vector): Asteroid | null {
        for (const moveable of moveables) {
            if (moveable instanceof Asteroid && moveable.isHit(_hotspot)) {
                return moveable;
            }
        }
        return null;
    }
    function breakAsteroid(_asteroid: Asteroid): void {
        if (_asteroid.size > 0.3) {
            for (let i: number = 0; i < 2; i++) {
                const fragment: Asteroid = new Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity);
                moveables.push(fragment);
            }
        }
        _asteroid.expandable = true;
    }
    function createAsteroids(_nAsteroids: number): void {
        for (let i: number = 0; i < _nAsteroids; i++) {
            const asteroid: Asteroid = new Asteroid(1.0);
            moveables.push(asteroid);
        }
    }
    function update(): void {
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        for (const moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }

        deleteExpandables();

        //ship.draw();
        //handleCollisions();
    }
    function deleteExpandables(): void {
        for (let i: number = moveables.length - 1; i >= 0; i--) {
            if (moveables[i].expandable)
                moveables.splice(i, 1);
        }
    }
}

