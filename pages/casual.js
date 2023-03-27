import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Link from "next/link"
import axios from 'axios'
import dbConnect from "../utils/Mongo";
import { useRouter } from 'next/router'
import Casual from '../model/Casual'

export default function CausalProd({ casualItems }) {
    const isServerReq = req => !req.url.startsWith('/_next');
    const router = useRouter()

    return (
        <div>
            <Header />
            <p className=" itemHeader ml-auto text-left">  <span className='cursor-pointer' onClick={() => router.push('/men')}>Men</span>  </p>
            <p className='itemHeader_Main text-5xl text-left'>OFFICE</p>
            <div className="grid productSection lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-10">
                {
                    casualItems.map((cas) => (
                        <Link href={`/office/${cas._id}`} passHref key={cas._id}>
                            <div className='productGrid ' key={cas._id}>
                                <img className='comImage' src={cas.images} />
                                <br />
                                <p className='itemName'>{cas.name}</p>
                                <br />
                                <p className='itemPrice'>    $ {cas.price}
                                </p>
                            </div>
                        </Link>
                    ))
                }
            </div>
            <Footer />
        </div>
    )
}

export const getServerSideProps = async () => {
    try {
        await dbConnect();
        const allCasual = await Casual.find();

        return {
            props: {
                casualItems: JSON.parse(JSON.stringify(allCasual)),
            },
        };
    } catch (error) {
        console.log("cant fetch");
        return {
            props: {
                offices: [],
            },
        };
    }
};


class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}




class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value)
        // if the tree is empty 
        if (this.root === null) {
            this.root = newNode
        }
        // traverse the node that is arrange the values to the node it belongs to

        else {
            let currentNode = this.root
            // to keep looping the tree . till you stop
            while (true) {
                if (value < currentNode) {
                    // Go left the of the head 
                    if (!currentNode.left) {
                        currentNode.left = newNode
                        return this
                    }
                    currentNode = currentNode.left
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode
                        return this
                    }
                    currentNode.right = currentNode
                }
            }
        }

    }
    lookUp(value) {
        // check if the binarry tree exist 
        if (!this.root) {
            return false
        }
        let currentNode = this.root

        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left
            } else if (value > currentNode.value) {
                currentNode = currentNode.right
            } else if (value === currentNode.value) {
                return currentNode
            }

        }

    }


}
const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(3)
tree.insert(94)
JSON.stringify(traverse(tree.root))

traverse = (node) => {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
} 