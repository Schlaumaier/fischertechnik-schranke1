/**
 * Programm für die Parkschranke von Fischertechnik.
 * 
 * Eine Lichtschranke erfasst ein Auto. Die Schranke, angetrieben von einem Gleichstrommotor öffnet sich bis an den Endschalter. Nach 5 sec schließt die Schranke, ebenfalls bis an einen Endschalter
 */
/**
 * Der Motor für die Schranke ist an P16 und P15 angeschlossen. Die LED für die Lichtschranke an P13
 */
led.enable(false)
pins.digitalWritePin(DigitalPin.P16, 0)
pins.digitalWritePin(DigitalPin.P15, 0)
pins.digitalWritePin(DigitalPin.P13, 1)
/**
 * Fototransistor dunkel, also kleiner 500, dann Motor an -> Schranke öffnet
 */
/**
 * An Pin P0 Schalter Schranke auf. Wenn Schalter betätigt Pin P0=1.  Also: Solange Pin P0 =0 wird gewartet. Wenn die Schranke oben ist geht das Programm weiter
 */
/**
 * Motor Schranke auf stoppen
 */
/**
 * 5 sec warten, dann Schranke schließen
 */
/**
 * Motor schließt Schranke
 */
/**
 * Warten bis Schalter Schranke unten anspricht 
 * 
 * Wenn Schranke unten wird Pin P3 wird 1
 */
/**
 * Motor Schranke abwärts stoppen
 */
/**
 * Der Ablauf ist beendet, nun kann die Lichtschranke wieder neu überprüft werden, denn das Programm beginnt wieder von vorne
 */
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, pins.analogReadPin(AnalogPin.P1))
    if (pins.analogReadPin(AnalogPin.P1) < 500) {
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P16, 1)
        pins.digitalWritePin(DigitalPin.P15, 0)
        while (pins.digitalReadPin(DigitalPin.P0) == 0) {
            basic.pause(1)
        }
        pins.digitalWritePin(DigitalPin.P16, 0)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)
        while (pins.digitalReadPin(DigitalPin.P3) == 0) {
            basic.pause(1)
        }
        pins.digitalWritePin(DigitalPin.P15, 0)
    }
})
