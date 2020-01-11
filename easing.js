export const EasingType = {
	IN: 0,
	OUT: 1,
	INOUT: 2,
	OUTIN: 3,
}

export const EasingCurve = {
	LINEAR: 0,
	QUAD: 1,
	CUBIC: 2,
	QUART: 3,
	QUINT: 4,
	EXPO: 5,
	CIRC: 6,
	SINE: 7,
	BOUNCE: 8,
	BACK: 9,
	ELASTIC: 10,
}

export default function easing(val, type = EasingType.IN, curve = EasingCurve.LINEAR, strength = 1.5) {
	switch (type) {
		default:
		case EasingType.IN:
			return calc(val, curve, strength)

		case EasingType.OUT:
			return 1.0 - calc(1.0 - val, curve, strength)

		case EasingType.INOUT: 
			if (val <= .5) {
				return calc(val * 2.0, curve, strength) / 2.0
			}
			else {
				return 1.0 - calc((1.0 - val) * 2.0, curve, strength) / 2.0
			}
	}
}

// Calculate the easing value based on the curve type.
function calc(val, curve, strength) {
	switch (curve) {
		case EasingCurve.QUAD:
			return val ** 2

		case EasingCurve.CUBIC:
			return val ** 3

		case EasingCurve.QUART:
			return val ** 4

		case EasingCurve.QUINT:
			return val ** 5

		case EasingCurve.EXPO:
			return 2 ** (8 * (val - 1))

		case EasingCurve.CIRC:
			return 1 - Math.sin(Math.acos(val))

		case EasingCurve.SINE:
			return 1 - Math.sin((1 - val) * Math.PI / 2)

		case EasingCurve.BOUNCE: {
			let give = 0

			for (let a = 0.0, b = 1; a < 25; a += b, b /= 2) {
				if (val >= (7 - 4 * a) / 11) {
					give = b * b - ((11 - 6 * a - 11 * val) / 4) ** 2
					break
				}
			}

			return give
		}

		case EasingCurve.BACK:
			return val ** 2 * ((strength + 1) * val - strength)

		case EasingCurve.ELASTIC:
			return 2 ** (10 * --val) * Math.cos(20 * val * Math.PI * strength / 3)

		default:
			return val
	}
}