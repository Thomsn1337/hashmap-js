# Hash maps

A hash map is an abstract data structure that stores data in key-value pairs.
These pairs are organized into buckets, with each bucket holding multiple pairs.
The decision about which bucket a pair belongs to is made by hashing the key of
the data.

Hashing is a procedure used to produce a fixed-size value (hash sum or hash
code) from input data. Ideally, a good hash function distributes the data evenly
across the available buckets and ensures that the same data always produces the
same hash code.

If two pieces of data produce the same hash code, a collision occurs in the hash
map. Collisions are commonly handled by chaining, which involves creating a
linked list within each bucket and appending colliding data to it.

As the number of entries in the hash map increases, the load factor, which is
the ratio of the number of entries to the number of buckets, also increases.
When the load factor exceeds a certain threshold, the number of buckets is
increased dynamically to maintain performance, a process known as resizing the
hash map.

## Links

- [Assignment page](https://www.theodinproject.com/lessons/javascript-hashmap)
- [About Odin](https://www.theodinproject.com/about)
