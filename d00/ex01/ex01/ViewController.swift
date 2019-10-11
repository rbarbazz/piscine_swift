//
//  ViewController.swift
//  ex00
//
//  Created by Raphael BARBAZZA on 10/11/19.
//  Copyright © 2019 rbarbazz. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet var textLabel: UILabel!

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }
    
    @IBAction func buttonTapped() {
        self.textLabel.text = "Hello World !"
    }

}
