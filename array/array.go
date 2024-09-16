package array

type Array[T any] struct {
	data []T
}

func New[T any]() *Array[T] {
	return &Array[T]{
		data: make([]T, 0),
	}
}

func (a *Array[T]) Push(value T) (T, bool) {
	a.data = append(a.data, value)
	return value, true
}

func (a *Array[T]) Pop() (T, bool) {
	if len(a.data) == 0 {
		var zero T
		return zero, false
	}
	value := a.data[len(a.data)-1]
	a.data = a.data[:len(a.data)-1]
	return value, true
}
